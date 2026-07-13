const projects = [
  {
    index: "01",
    type: "AI CAD / PRODUCT",
    title: "ORCA · 从文本到可制造 CAD",
    description:
      "参与 ORCA AI 的产品开发，将自然语言设计意图转化为精确、可编辑、可制造且具备装配信息的 3D CAD 模型，并衔接工程图、制作指南与 CNC / 3D 打印等生产流程。",
    meta: "Natural Language / AI CAD / Editable Geometry / Manufacturing",
    accent: "orca",
    featured: true,
    href: "https://orca-cad.com/",
  },
  {
    index: "02",
    type: "GENERATIVE SYSTEM",
    title: "鞋类晶格生成系统",
    description:
      "为鞋体内部建立参数化晶格方案，将复杂的几何处理整理为可复用的一键生成流程。",
    meta: "Grasshopper / GHPython / Lattice",
    accent: "lime",
  },
  {
    index: "03",
    type: "OPTIMIZATION",
    title: "幕墙成本优化",
    description:
      "基于面板面积、类型与利用率寻优，并联动 Rhino 自动生成加工图纸与料单。",
    meta: "成本约 -15% / 出图效率约 +70%",
    accent: "blue",
  },
  {
    index: "04",
    type: "TOPOLOGY",
    title: "Ameba 结构拓扑优化",
    description:
      "覆盖边界条件、目标约束、结果解析与网格重建，并以 3D 打印完成制造验证。",
    meta: "Ameba / Rhino / 3D Printing",
    accent: "orange",
  },
];

const experiences = [
  {
    period: "2026.05—至今",
    company: "曲率流动深圳有限公司",
    role: "ORCA AI 开发",
    detail: "参与 ORCA AI 的产品开发与功能迭代，围绕自然语言到精确、可编辑、可制造 3D CAD 的工作流持续落地。",
    current: true,
  },
  {
    period: "2026.03—2026.05.22",
    company: "卡宾",
    role: "参数化设计师（正式工作）",
    detail: "搭建鞋类参数化流程，主导鞋体内部晶格化方案，并以 GHPython 与 Agent 工具提升迭代效率。",
  },
  {
    period: "2025.06—2025.08",
    company: "arch manu",
    role: "结构设计师（实习）",
    detail: "构建 Ameba 拓扑优化工作流，将性能驱动结果转化为可制造的网格与 3D 打印样件。",
  },
  {
    period: "2024.11—2025.02",
    company: "杭州椒图幕墙",
    role: "建筑工程师（实习）",
    detail: "开发幕墙成本优化与自动出图流程，材料加工成本降低约 15%，出图效率提升约 70%。",
  },
  {
    period: "2024.07—2024.09",
    company: "广州博厦建筑设计研究院有限公司",
    role: "建筑设计师（实习）",
    detail: "完成 Rhino 高精度建模与 V-Ray 方案可视化，支持设计汇报与决策展示。",
  },
];

const toolGroups = [
  ["PARAMETRIC", "Grasshopper", "Rhino", "GHPython"],
  ["CODE", "Python", "流程脚本", "工具封装"],
  ["AI / AGENT", "ORCA AI", "Claude Code", "Codex"],
  ["WORKFLOW", "MCP", "多软件桥接", "流程协同"],
  ["FABRICATION", "3D 打印", "V-Ray", "数字制造"],
];

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="李昌朔个人主页">
          <span>LCS</span>
          <span className="wordmark-index">/ 042</span>
        </a>
        <nav aria-label="主导航">
          <a href="#work">项目</a>
          <a href="#experience">履历</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
        <span className="availability">
          <span className="status-dot" aria-hidden="true" />
          SHANGHAI / CN
        </span>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> COMPUTATIONAL DESIGNER / ORCA AI DEVELOPER
            </p>
            <h1 id="hero-title">
              <span className="hero-name">李昌朔</span>
              <span className="hero-outline">构建下一种</span>
              <span>设计逻辑<span className="lime">.</span></span>
            </h1>
            <p className="hero-lede">
              参数化设计 <b>×</b> AI <b>×</b> 数字制造
            </p>
            <p className="hero-intro">
              把复杂的设计问题转化为可计算、可迭代、可制造的系统——从 ORCA 的自然语言生成 CAD，到几何生成、性能优化与数字制造。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                查看代表项目 <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-ghost" href={`${basePath}/李昌朔_简历.pdf`} download>
                下载简历 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="node-field" aria-hidden="true">
            <div className="field-label field-label-top">ORCA / AI CAD<br />ITERATION 042</div>
            <div className="field-label field-label-bottom">TEXT → INTENT → CAD → BUILD<br />REALTIME PIPELINE</div>
            <span className="field-scan" />
            <span className="orbit orbit-a" />
            <span className="orbit orbit-b" />
            <span className="connector connector-a" />
            <span className="connector connector-b" />
            <span className="data-dot dot-a" />
            <span className="data-dot dot-b" />
            <span className="data-dot dot-c" />
            <div className="core-node">
              <span>ORCA_AI</span>
              <strong>[ ACTIVE ]</strong>
            </div>
            <span className="coordinate">X 114.0579° / Y 22.5431°</span>
          </div>

          <div className="hero-data">
            <div>
              <span className="data-label">EXPERIENCE.LOG</span>
              <p><em>NOW</em> 曲率流动深圳有限公司 · ORCA AI 开发</p>
            </div>
            <div>
              <span className="data-label">TOOLSTACK.ARRAY</span>
              <p>AI CAD / Grasshopper / Rhino / GHPython / Python / Agent / MCP</p>
            </div>
          </div>
        </section>

        <section className="section projects" id="work" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-index">[ 01—04 ]</p>
            <div>
              <h2 id="projects-title">Selected Systems</h2>
              <p>从自然语言生成 CAD 到几何优化与真实生产 · 2024—2026</p>
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
                <div className="project-geometry" aria-hidden="true">
                  <span /><span /><span /><span /><span />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span>{project.meta}</span>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      访问 ORCA <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span aria-hidden="true">↗</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience" aria-labelledby="experience-title">
          <div className="section-heading sticky-heading">
            <p className="section-index">[ CAREER.LOG ]</p>
            <div>
              <h2 id="experience-title">工作与实习经历</h2>
              <p>参数化设计、结构优化与 AI 产品开发</p>
            </div>
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-row" key={`${item.period}-${item.company}`}>
                <div className="timeline-period">
                  {item.current && <span className="now-badge">NOW</span>}
                  <time>{item.period}</time>
                </div>
                <div className="timeline-main">
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
                <span className="timeline-mark" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="section-index">[ PROFILE.SYS ]</p>
            <h2 id="about-title">设计、代码与制造的交叉现场</h2>
            <p className="about-lead">
              我专注于参数化设计与计算设计，并把 Python、Agent 与 MCP 工作流引入日常研发。目标不是只生成一个形体，而是建立一套可以被复用、调试与持续演化的设计系统。
            </p>
            <div className="education">
              <span>EDUCATION</span>
              <div>
                <strong>新南威尔士大学（UNSW）</strong>
                <p>本科 · 参数化设计 · 2023.01—2026.12</p>
              </div>
            </div>
          </div>

          <div className="tool-array" aria-label="工具与能力">
            {toolGroups.map(([label, ...items], index) => (
              <div className="tool-row" key={label}>
                <span>{String(index + 1).padStart(2, "0")} / {label}</span>
                <p>{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-index">[ OPEN.CHANNEL ]</p>
          <h2 id="contact-title">一起构建下一种<br />设计工作流<span className="lime">.</span></h2>
          <div className="contact-links">
            <a href="mailto:samlichshuo@gmail.com">samlichshuo@gmail.com <span>↗</span></a>
            <a href="tel:+8613141533304">+86 131 4153 3304 <span>↗</span></a>
          </div>
          <div className="contact-footer">
            <span>BASED IN SHANGHAI / AVAILABLE ONLINE</span>
            <span>© 2026 李昌朔</span>
          </div>
        </section>
      </main>
    </>
  );
}
