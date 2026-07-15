import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the bilingual portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /李昌朔 \/ Li Changshuo/);
  assert.match(html, /OrcaFlow/);
  assert.match(html, /CrvFlow/);
  assert.match(html, /Selected Systems/);
  assert.match(html, /aria-pressed="true"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("ships every project and social-preview image", async () => {
  const assetPaths = [
    "public/og.webp",
    "public/projects/lattice-shoe-studio.webp",
    "public/projects/curtain-wall-aluminum.webp",
    "public/projects/boxia-office-concept.webp",
    "public/projects/orcaflow-logo.webp",
    "public/profile-portrait.webp",
  ];

  await Promise.all(assetPaths.map((assetPath) => access(new URL(assetPath, root))));

  const [page, layout] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.match(page, /portfolio-language/);
  assert.match(page, /Switch language/);
  assert.match(page, /OrcaFlow · Replayable Node-Based CAD/);
  assert.match(page, /profile-portrait\.webp/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /og\.webp/);
});
