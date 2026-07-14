"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "zh" | "en";
type LocalizedText = Record<Language, string>;

type ImageCredit = {
  label: string;
  href: string;
};

type ProjectVisual =
  | {
      kind: "image";
      src: string;
      alt: LocalizedText;
      position?: string;
      badge?: LocalizedText;
      credit?: ImageCredit;
    }
  | {
      kind: "orca" | "orcaflow" | "ameba";
      alt: LocalizedText;
    };

type Project = {
  index: string;
  type: string;
  title: LocalizedText;
  description: LocalizedText;
  meta: LocalizedText;
  accent: string;
  featured?: boolean;
  href?: string;
  linkLabel?: LocalizedText;
  visual: ProjectVisual;
};

const localized = (zh: string, en: string): LocalizedText => ({ zh, en });

const projects: Project[] = [
  {
    index: "01",
    type: "AI CAD / PRODUCT",
    title: localized("ORCA · 从文本到可制造 CAD", "ORCA · From Text to Buildable CAD"),
    description: localized(
      "参与 ORCA AI 的产品开发，将自然语言设计意图转化为精确、可编辑、可制造且具备装配信息的 3D CAD 模型，并衔接工程图、制作指南与 CNC / 3D 打印等生产流程。",
      "Contributing to ORCA AI, turning natural-language design intent into precise, editable and manufacturable 3D CAD with assembly intelligence, drawings, build guides and CNC / 3D-printing workflows.",
    ),
    meta: localized(
      "自然语言 / AI CAD / 可编辑几何 / 制造",
      "Natural Language / AI CAD / Editable Geometry / Manufacturing",
    ),
    accent: "orca",
    featured: true,
    href: "https://orca-cad.com/",
    linkLabel: localized("访问 ORCA", "Visit ORCA"),
    visual: {
      kind: "orca",
      alt: localized("ORCA 自然语言到可制造 CAD 的流程图形", "ORCA text-to-buildable-CAD process graphic"),
    },
  },
  {
    index: "02",
    type: "INDEPENDENT SOFTWARE / PARAMETRIC CAD",
    title: localized("OrcaFlow · 可回放的节点式 CAD", "OrcaFlow · Replayable Node-Based CAD"),
    description: localized(
      "独立开发的浏览器端参数化 CAD 系统，将 Rhino 式直接建模、可视化节点图与可回放命令时间线统一。基于 CadQuery，提供 139 个节点、Three.js 实时预览、特征树、增量执行与 STEP / STL 导出。",
      "An independently developed browser-based parametric CAD system unifying Rhino-style direct modeling, a visual node graph and one replayable command timeline. Built on CadQuery with 139 nodes, real-time Three.js previews, feature history, incremental execution and STEP / STL export.",
    ),
    meta: localized(
      "Python / CadQuery / FastAPI / Three.js / WebSocket",
      "Python / CadQuery / FastAPI / Three.js / WebSocket",
    ),
    accent: "flow",
    featured: true,
    visual: {
      kind: "orcaflow",
      alt: localized("OrcaFlow 标志与节点式参数化 CAD 界面图形", "OrcaFlow logo with a node-based parametric CAD interface graphic"),
    },
  },
  {
    index: "03",
    type: "GENERATIVE SYSTEM",
    title: localized("鞋类晶格生成系统", "Footwear Lattice Generation System"),
    description: localized(
      "为鞋体内部建立参数化晶格方案，将复杂的几何处理整理为可复用的一键生成流程，并通过 3D 打印验证结构与制造可行性。",
      "A reusable one-click workflow for generating parametric internal footwear lattices, translating complex geometry operations into a repeatable system validated through physical 3D printing.",
    ),
    meta: localized("Grasshopper / GHPython / 晶格 / 3D 打印", "Grasshopper / GHPython / Lattice / 3D Printing"),
    accent: "lime",
    visual: {
      kind: "image",
      src: "/projects/lattice-shoe-studio.webp",
      alt: localized("白色 3D 打印晶格鞋原型侧面视图", "Side view of a white 3D-printed lattice footwear prototype"),
      position: "50% 50%",
    },
  },
  {
    index: "04",
    type: "OPTIMIZATION / FACADE",
    title: localized("幕墙成本优化", "Facade Cost Optimization"),
    description: localized(
      "基于铝板面积、类型与排版利用率进行多目标寻优，并联动 Rhino 自动生成加工图纸与料单，让成本判断直接进入几何工作流。",
      "A multi-objective optimization workflow balancing aluminum-panel area, typology and nesting efficiency, connected to Rhino for automatic fabrication drawings and material schedules.",
    ),
    meta: localized("成本约 -15% / 出图效率约 +70%", "Approx. -15% cost / +70% drawing efficiency"),
    accent: "blue",
    visual: {
      kind: "image",
      src: "/projects/curtain-wall-aluminum.webp",
      alt: localized("建筑铝板幕墙单元与接缝细节", "Aluminum facade panels and joint details"),
      position: "50% 42%",
      credit: {
        label: "MATHIAS REDING · PEXELS",
        href: "https://www.pexels.com/photo/panels-made-from-aluminum-10410096/",
      },
    },
  },
  {
    index: "05",
    type: "TOPOLOGY / FABRICATION",
    title: localized("Ameba 结构拓扑优化", "Ameba Structural Topology Optimization"),
    description: localized(
      "覆盖边界条件、目标约束、结果解析与网格重建，并以 3D 打印完成从性能驱动几何到实体样件的制造验证。",
      "A complete topology-optimization workflow spanning boundary conditions, objectives, result interpretation and mesh reconstruction, validated as a physical 3D-printed prototype.",
    ),
    meta: localized("Ameba / Rhino / 网格重建 / 3D 打印", "Ameba / Rhino / Mesh Reconstruction / 3D Printing"),
    accent: "orange",
    visual: {
      kind: "ameba",
      alt: localized("拓扑优化网格与应力路径抽象图形", "Abstract topology-optimization mesh and stress-path graphic"),
    },
  },
  {
    index: "06",
    type: "ARCHITECTURE / VISUALIZATION",
    title: localized("博厦 · 写字楼建筑可视化", "Boxia · Office Architecture Visualization"),
    description: localized(
      "在建筑设计实习中完成 Rhino 高精度建模与 V-Ray 方案可视化，以克制的材质、立面节奏和场景光线支持设计汇报与决策。",
      "High-fidelity Rhino modeling and V-Ray visualization produced during an architecture internship, using restrained materials, facade rhythm and scene lighting to support design presentations and decisions.",
    ),
    meta: localized("Rhino / V-Ray / 建筑建模 / 方案表达", "Rhino / V-Ray / Architectural Modeling / Visualization"),
    accent: "stone",
    visual: {
      kind: "image",
      src: "/projects/boxia-office-concept.webp",
      alt: localized("中国城市写字楼建筑概念效果图", "Concept visualization of a contemporary Chinese urban office building"),
      position: "50% 55%",
      badge: localized("概念可视化", "Concept visualization"),
    },
  },
];

const experiences = [
  {
    period: localized("2026.05—至今", "May 2026—Present"),
    company: localized("CrvFlow", "CrvFlow"),
    role: localized("ORCA AI 开发", "ORCA AI Developer"),
    detail: localized(
      "参与 ORCA AI 的产品开发与功能迭代，围绕自然语言到精确、可编辑、可制造 3D CAD 的工作流持续落地。",
      "Developing and iterating ORCA AI workflows that turn natural language into precise, editable and manufacturable 3D CAD.",
    ),
    current: true,
  },
  {
    period: localized("2026.03—2026.05.22", "Mar 2026—May 22, 2026"),
    company: localized("卡宾", "Cabbeen"),
    role: localized("参数化设计师（正式工作）", "Parametric Designer"),
    detail: localized(
      "搭建鞋类参数化流程，主导鞋体内部晶格化方案，并以 GHPython 与 Agent 工具提升迭代效率。",
      "Built parametric footwear workflows, led internal lattice development, and accelerated iterations with GHPython and agent tools.",
    ),
  },
  {
    period: localized("2025.06—2025.08", "Jun 2025—Aug 2025"),
    company: localized("arch manu", "arch manu"),
    role: localized("结构设计师（实习）", "Structural Design Intern"),
    detail: localized(
      "构建 Ameba 拓扑优化工作流，将性能驱动结果转化为可制造的网格与 3D 打印样件。",
      "Built an Ameba topology-optimization workflow and translated performance-driven results into manufacturable meshes and 3D-printed prototypes.",
    ),
  },
  {
    period: localized("2024.11—2025.02", "Nov 2024—Feb 2025"),
    company: localized("杭州椒图幕墙", "Hangzhou Jiaotu Facade"),
    role: localized("建筑工程师（实习）", "Architectural Engineering Intern"),
    detail: localized(
      "开发幕墙成本优化与自动出图流程，材料加工成本降低约 15%，出图效率提升约 70%。",
      "Developed facade cost-optimization and automated drawing workflows, reducing fabrication cost by about 15% and improving drawing efficiency by about 70%.",
    ),
  },
  {
    period: localized("2024.07—2024.09", "Jul 2024—Sep 2024"),
    company: localized("广州博厦建筑设计研究院有限公司", "Guangzhou Boxia Architectural Design Institute"),
    role: localized("建筑设计师（实习）", "Architectural Design Intern"),
    detail: localized(
      "完成 Rhino 高精度建模与 V-Ray 方案可视化，支持设计汇报与决策展示。",
      "Produced high-fidelity Rhino models and V-Ray visualizations to support design presentations and decision-making.",
    ),
  },
];

const toolGroups = [
  { label: "PARAMETRIC", items: localized("Grasshopper · Rhino · GHPython", "Grasshopper · Rhino · GHPython") },
  { label: "CODE", items: localized("Python · 流程脚本 · 工具封装", "Python · Workflow Scripting · Tooling") },
  { label: "AI / AGENT", items: localized("ORCA AI · Claude Code · Codex", "ORCA AI · Claude Code · Codex") },
  { label: "CAD SYSTEM", items: localized("CadQuery · OpenCascade · Three.js", "CadQuery · OpenCascade · Three.js") },
  { label: "FABRICATION", items: localized("3D 打印 · V-Ray · 数字制造", "3D Printing · V-Ray · Digital Fabrication") },
];

const interfaceCopy = {
  zh: {
    skip: "跳到主要内容",
    homeLabel: "李昌朔个人主页",
    navLabel: "主导航",
    nav: ["项目", "履历", "关于", "联系"],
    languageLabel: "切换语言",
    languageChanged: "当前语言：中文",
    eyebrow: "计算设计师 / ORCA AI 开发者",
    heroName: "李昌朔",
    heroOutline: "构建下一种",
    heroMain: "设计逻辑",
    heroLede: ["参数化设计", "AI", "数字制造"],
    heroIntro: "把复杂设计问题转化为可计算、可迭代、可制造的系统——从 ORCA 与 OrcaFlow 的智能 CAD，到几何生成、性能优化与数字制造。",
    workButton: "查看代表项目",
    resumeButton: "下载中文简历",
    currentRole: "CrvFlow · ORCA AI 开发",
    projectsTitle: "Selected Systems",
    projectsSubtitle: "从智能 CAD 与独立软件，到几何优化和真实制造 · 2024—2026",
    experienceTitle: "工作与实习经历",
    experienceSubtitle: "参数化设计、结构优化与 AI 产品开发",
    aboutTitle: "设计、代码与制造的交叉现场",
    aboutLead: "我专注于参数化与计算设计，并把 Python、Agent、CadQuery 与 MCP 工作流引入研发。目标不是只生成一个形体，而是建立一套可以被复用、调试并持续演化的设计系统。",
    educationSchool: "新南威尔士大学（UNSW）",
    educationDetail: "本科 · 参数化设计 · 2023.01—2026.12",
    toolsLabel: "工具与能力",
    contactTitleA: "一起构建下一种",
    contactTitleB: "设计工作流",
    footerLocation: "常驻上海 / 支持线上协作",
    metadataTitle: "李昌朔｜参数化设计师 & ORCA AI 开发",
    metadataDescription: "李昌朔的个人作品集：ORCA、OrcaFlow、参数化设计、AI CAD 与数字制造。",
  },
  en: {
    skip: "Skip to main content",
    homeLabel: "Li Changshuo portfolio home",
    navLabel: "Primary navigation",
    nav: ["Work", "Experience", "About", "Contact"],
    languageLabel: "Switch language",
    languageChanged: "Current language: English",
    eyebrow: "COMPUTATIONAL DESIGNER / ORCA AI DEVELOPER",
    heroName: "LI CHANGSHUO",
    heroOutline: "BUILDING THE NEXT",
    heroMain: "DESIGN LOGIC",
    heroLede: ["PARAMETRIC DESIGN", "AI", "DIGITAL FABRICATION"],
    heroIntro: "I turn complex design problems into computable, iterative and manufacturable systems—from intelligent CAD with ORCA and OrcaFlow to geometry generation, performance optimization and digital fabrication.",
    workButton: "Explore selected work",
    resumeButton: "Download résumé (CN)",
    currentRole: "CrvFlow · ORCA AI Developer",
    projectsTitle: "Selected Systems",
    projectsSubtitle: "From intelligent CAD and independent software to geometry optimization and real fabrication · 2024—2026",
    experienceTitle: "Work & Experience",
    experienceSubtitle: "Parametric design, structural optimization and AI product development",
    aboutTitle: "Where design, code and fabrication meet",
    aboutLead: "I work across parametric and computational design, bringing Python, agents, CadQuery and MCP workflows into product development. The goal is not a single form, but a reusable system that can be tested, debugged and continuously evolved.",
    educationSchool: "University of New South Wales (UNSW)",
    educationDetail: "Bachelor's · Computational / Parametric Design · Jan 2023—Dec 2026",
    toolsLabel: "Tools and capabilities",
    contactTitleA: "LET'S BUILD THE NEXT",
    contactTitleB: "DESIGN WORKFLOW",
    footerLocation: "BASED IN SHANGHAI / AVAILABLE ONLINE",
    metadataTitle: "Li Changshuo | Computational Designer & ORCA AI Developer",
    metadataDescription: "Li Changshuo's portfolio: ORCA, OrcaFlow, parametric design, AI CAD and digital fabrication.",
  },
};

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

function ProjectMedia({ project, language }: { project: Project; language: Language }) {
  const visual = project.visual;

  if (visual.kind === "image") {
    return (
      <figure className="project-media project-media-image">
        <Image
          src={`${basePath}${visual.src}`}
          alt={visual.alt[language]}
          fill
          unoptimized
          sizes="(max-width: 820px) 100vw, (max-width: 1200px) 50vw, 700px"
          style={{ objectPosition: visual.position ?? "50% 50%" }}
        />
        <span className="media-grid" aria-hidden="true" />
        {visual.badge && <span className="media-badge">{visual.badge[language]}</span>}
        {visual.credit && (
          <a className="media-credit" href={visual.credit.href} target="_blank" rel="noreferrer">
            {visual.credit.label}
          </a>
        )}
      </figure>
    );
  }

  if (visual.kind === "orcaflow") {
    return (
      <figure className="project-media project-media-system project-media-flow" role="img" aria-label={visual.alt[language]}>
        <span className="flow-viewport" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        <span className="flow-link flow-link-a" aria-hidden="true" />
        <span className="flow-link flow-link-b" aria-hidden="true" />
        <span className="flow-node flow-node-a" aria-hidden="true">MODEL</span>
        <span className="flow-node flow-node-b" aria-hidden="true">GRAPH</span>
        <span className="flow-node flow-node-c" aria-hidden="true">EXPORT</span>
        <Image
          className="flow-logo"
          src={`${basePath}/projects/orcaflow-logo.webp`}
          alt=""
          width={512}
          height={512}
          unoptimized
          aria-hidden="true"
        />
        <span className="media-code" aria-hidden="true">139 NODES / 17 CATEGORIES</span>
      </figure>
    );
  }

  if (visual.kind === "ameba") {
    return (
      <figure className="project-media project-media-system project-media-ameba" role="img" aria-label={visual.alt[language]}>
        <span className="ameba-shell" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i />
        </span>
        <span className="ameba-axis ameba-axis-a" aria-hidden="true" />
        <span className="ameba-axis ameba-axis-b" aria-hidden="true" />
        <span className="media-code" aria-hidden="true">LOAD → SOLVE → REBUILD</span>
      </figure>
    );
  }

  return (
    <figure className="project-media project-media-system project-media-orca" role="img" aria-label={visual.alt[language]}>
      <span className="orca-plane orca-plane-a" aria-hidden="true" />
      <span className="orca-plane orca-plane-b" aria-hidden="true" />
      <span className="orca-route orca-route-a" aria-hidden="true" />
      <span className="orca-route orca-route-b" aria-hidden="true" />
      <span className="orca-stage orca-stage-a" aria-hidden="true">TEXT</span>
      <span className="orca-stage orca-stage-b" aria-hidden="true">CAD</span>
      <span className="orca-stage orca-stage-c" aria-hidden="true">BUILD</span>
      <span className="orca-core" aria-hidden="true">ORCA_AI<br /><b>[ ACTIVE ]</b></span>
      <span className="media-code" aria-hidden="true">INTENT / GEOMETRY / ASSEMBLY</span>
    </figure>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [languageReady, setLanguageReady] = useState(false);
  const ui = interfaceCopy[language];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem("portfolio-language");
      const preferredLanguage: Language = savedLanguage === "zh" || savedLanguage === "en"
        ? savedLanguage
        : navigator.language.toLowerCase().startsWith("zh")
          ? "zh"
          : "en";

      setLanguage(preferredLanguage);
      setLanguageReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.language = language;
    document.title = ui.metadataTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = ui.metadataDescription;
    if (languageReady) window.localStorage.setItem("portfolio-language", language);
  }, [language, languageReady, ui.metadataDescription, ui.metadataTitle]);

  const projectRange = `[ 01—${String(projects.length).padStart(2, "0")} ]`;

  return (
    <div className="site-shell" data-language={language}>
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={ui.homeLabel}>
          <span>LCS</span>
          <span className="wordmark-index">/ 042</span>
        </a>
        <nav aria-label={ui.navLabel}>
          <a href="#work">{ui.nav[0]}</a>
          <a href="#experience">{ui.nav[1]}</a>
          <a href="#about">{ui.nav[2]}</a>
          <a href="#contact">{ui.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <span className="availability">
            <span className="status-dot" aria-hidden="true" />
            SHANGHAI / CN
          </span>
          <div className="language-switcher" role="group" aria-label={ui.languageLabel}>
            <button type="button" aria-pressed={language === "zh"} onClick={() => setLanguage("zh")}>中</button>
            <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
          </div>
        </div>
        <span className="sr-only" aria-live="polite">{ui.languageChanged}</span>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> {ui.eyebrow}
            </p>
            <h1 id="hero-title">
              <span className="hero-name">{ui.heroName}</span>
              <span className="hero-outline">{ui.heroOutline}</span>
              <span>{ui.heroMain}<span className="lime">.</span></span>
            </h1>
            <p className="hero-lede">
              {ui.heroLede[0]} <b>×</b> {ui.heroLede[1]} <b>×</b> {ui.heroLede[2]}
            </p>
            <p className="hero-intro">{ui.heroIntro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {ui.workButton} <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-ghost" href={`${basePath}/李昌朔_简历.pdf`} download>
                {ui.resumeButton} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="node-field" aria-hidden="true">
            <div className="field-label field-label-top">ORCA / ORCAFLOW<br />ITERATION 042</div>
            <div className="field-label field-label-bottom">TEXT → INTENT → CAD → BUILD<br />REPLAYABLE PIPELINE</div>
            <span className="field-scan" />
            <span className="orbit orbit-a" />
            <span className="orbit orbit-b" />
            <span className="connector connector-a" />
            <span className="connector connector-b" />
            <span className="data-dot dot-a" />
            <span className="data-dot dot-b" />
            <span className="data-dot dot-c" />
            <div className="core-node">
              <span>CAD_SYSTEM</span>
              <strong>[ ACTIVE ]</strong>
            </div>
            <span className="coordinate">X 114.0579° / Y 22.5431°</span>
          </div>

          <div className="hero-data">
            <div>
              <span className="data-label">EXPERIENCE.LOG</span>
              <p><em>NOW</em> {ui.currentRole}</p>
            </div>
            <div>
              <span className="data-label">TOOLSTACK.ARRAY</span>
              <p>AI CAD / CadQuery / Grasshopper / Rhino / Python / Three.js</p>
            </div>
          </div>
        </section>

        <section className="section projects" id="work" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-index">{projectRange}</p>
            <div>
              <h2 id="projects-title">{ui.projectsTitle}</h2>
              <p>{ui.projectsSubtitle}</p>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.accent}${project.featured ? " project-featured" : ""}`}
                key={project.index}
              >
                <div className="project-topline">
                  <span>P.{project.index}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-body">
                  <ProjectMedia project={project} language={language} />
                  <div className="project-copy">
                    <h3>{project.title[language]}</h3>
                    <p>{project.description[language]}</p>
                    <div className="project-meta">
                      <span>{project.meta[language]}</span>
                      {project.href && project.linkLabel && (
                        <a href={project.href} target="_blank" rel="noreferrer">
                          {project.linkLabel[language]} <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience" aria-labelledby="experience-title">
          <div className="section-heading sticky-heading">
            <p className="section-index">[ CAREER.LOG ]</p>
            <div>
              <h2 id="experience-title">{ui.experienceTitle}</h2>
              <p>{ui.experienceSubtitle}</p>
            </div>
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-row" key={`${item.period.en}-${item.company.en}`}>
                <div className="timeline-period">
                  {item.current && <span className="now-badge">NOW</span>}
                  <time>{item.period[language]}</time>
                </div>
                <div className="timeline-main">
                  <h3>{item.company[language]}</h3>
                  <p className="timeline-role">{item.role[language]}</p>
                  <p className="timeline-detail">{item.detail[language]}</p>
                </div>
                <span className="timeline-mark" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="section-index">[ PROFILE.SYS ]</p>
            <h2 id="about-title">{ui.aboutTitle}</h2>
            <p className="about-lead">{ui.aboutLead}</p>
            <div className="education">
              <span>EDUCATION</span>
              <div>
                <strong>{ui.educationSchool}</strong>
                <p>{ui.educationDetail}</p>
              </div>
            </div>
          </div>

          <div className="tool-array" aria-label={ui.toolsLabel}>
            {toolGroups.map((group, index) => (
              <div className="tool-row" key={group.label}>
                <span>{String(index + 1).padStart(2, "0")} / {group.label}</span>
                <p>{group.items[language]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-index">[ OPEN.CHANNEL ]</p>
          <h2 id="contact-title">{ui.contactTitleA}<br />{ui.contactTitleB}<span className="lime">.</span></h2>
          <div className="contact-links">
            <a href="mailto:samlichshuo@gmail.com">samlichshuo@gmail.com <span>↗</span></a>
            <a href="tel:+8613141533304">+86 131 4153 3304 <span>↗</span></a>
          </div>
          <div className="contact-footer">
            <span>{ui.footerLocation}</span>
            <span>© 2026 LI CHANGSHUO / 李昌朔</span>
          </div>
        </section>
      </main>
    </div>
  );
}
