from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "李昌朔_简历.pdf"

FONT_REGULAR = Path(r"C:\Windows\Fonts\Deng.ttf")
FONT_BOLD = Path(r"C:\Windows\Fonts\Dengb.ttf")

pdfmetrics.registerFont(TTFont("Deng", str(FONT_REGULAR)))
pdfmetrics.registerFont(TTFont("Deng-Bold", str(FONT_BOLD)))

PAGE_WIDTH, PAGE_HEIGHT = A4

DARK = HexColor("#14232D")
TEAL = HexColor("#24AAA4")
TEXT = HexColor("#24313A")
MUTED = HexColor("#6F7D8A")
SIDEBAR = HexColor("#F2F5F4")
CARD = HexColor("#E8F5F3")
WHITE = HexColor("#FFFFFF")
LINE = HexColor("#D5DEE0")


def wrap_text(text: str, font: str, size: float, max_width: float) -> list[str]:
    lines: list[str] = []
    current = ""

    for char in text:
        candidate = current + char
        if current and pdfmetrics.stringWidth(candidate, font, size) > max_width:
            lines.append(current.rstrip())
            current = char.lstrip()
        else:
            current = candidate

    if current:
        lines.append(current.rstrip())

    return lines or [""]


def draw_wrapped(
    canvas: Canvas,
    text: str,
    x: float,
    y: float,
    max_width: float,
    font: str = "Deng",
    size: float = 9,
    leading: float = 12,
    color=TEXT,
) -> float:
    canvas.setFillColor(color)
    canvas.setFont(font, size)
    for line in wrap_text(text, font, size, max_width):
        canvas.drawString(x, y, line)
        y -= leading
    return y


def draw_section_heading(canvas: Canvas, text: str, x: float, y: float, width: float) -> float:
    canvas.setFillColor(DARK)
    canvas.setFont("Deng-Bold", 13)
    canvas.drawString(x, y, text)
    y -= 9
    canvas.setStrokeColor(TEAL)
    canvas.setLineWidth(1.1)
    canvas.line(x, y, x + width, y)
    return y - 13


def draw_skill_card(canvas: Canvas, x: float, y: float, width: float, title: str, body: str) -> float:
    height = 35
    canvas.setFillColor(CARD)
    canvas.roundRect(x, y - height, width, height, 6, fill=1, stroke=0)
    canvas.setFillColor(TEXT)
    canvas.setFont("Deng-Bold", 9)
    canvas.drawString(x + 8, y - 13, title)
    canvas.setFillColor(MUTED)
    canvas.setFont("Deng", 7.7)
    canvas.drawString(x + 8, y - 26, body)
    return y - height - 7


def draw_experience(
    canvas: Canvas,
    y: float,
    company: str,
    role: str,
    period: str,
    bullets: list[str],
    x: float = 216,
    width: float = 340,
) -> float:
    title = f"{company} | {role}"
    period_width = pdfmetrics.stringWidth(period, "Deng", 7.7)
    title_width = width - period_width - 18
    title_lines = wrap_text(title, "Deng-Bold", 10.1, title_width)

    canvas.setFillColor(TEAL)
    canvas.circle(x - 8, y + 2, 2.2, fill=1, stroke=0)

    canvas.setFillColor(TEXT)
    canvas.setFont("Deng-Bold", 10.1)
    for line in title_lines:
        canvas.drawString(x, y, line)
        y -= 12

    canvas.setFillColor(MUTED)
    canvas.setFont("Deng", 7.7)
    canvas.drawRightString(x + width, y + 12 * len(title_lines), period)

    y -= 2
    for bullet in bullets:
        canvas.setFillColor(TEAL)
        canvas.circle(x + 2, y + 3.2, 1.25, fill=1, stroke=0)
        y = draw_wrapped(canvas, bullet, x + 9, y, width - 9, size=8.2, leading=10.5)
        y -= 1

    return y - 8


def build_resume() -> None:
    canvas = Canvas(str(OUTPUT), pagesize=A4)
    canvas.setTitle("李昌朔 - 中文简历")
    canvas.setAuthor("李昌朔")
    canvas.setSubject("应用工程、3D 打印软件开发、结构设计与计算设计")

    canvas.setFillColor(WHITE)
    canvas.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)

    header_height = 102
    canvas.setFillColor(DARK)
    canvas.rect(0, PAGE_HEIGHT - header_height, PAGE_WIDTH, header_height, fill=1, stroke=0)
    canvas.setFillColor(TEAL)
    canvas.rect(40, PAGE_HEIGHT - header_height, 86, 5, fill=1, stroke=0)

    canvas.setFillColor(WHITE)
    canvas.setFont("Deng-Bold", 28)
    canvas.drawString(40, PAGE_HEIGHT - 45, "李昌朔")
    canvas.setFillColor(HexColor("#D9E6E7"))
    canvas.setFont("Deng", 11.5)
    canvas.drawString(40, PAGE_HEIGHT - 68, "应用工程师 / 计算设计师")

    canvas.setFillColor(HexColor("#D9E1E4"))
    canvas.setFont("Deng", 8.7)
    canvas.drawRightString(PAGE_WIDTH - 40, PAGE_HEIGHT - 37, "13141533304")
    canvas.drawRightString(PAGE_WIDTH - 40, PAGE_HEIGHT - 55, "samlichshuo@gmail.com")
    canvas.drawRightString(PAGE_WIDTH - 40, PAGE_HEIGHT - 73, "泉州晋江 | 3D 打印软件 / 结构设计 / 计算设计")

    sidebar_x = 40
    sidebar_width = 153
    sidebar_bottom = 40
    sidebar_top = PAGE_HEIGHT - header_height - 17
    canvas.setFillColor(SIDEBAR)
    canvas.roundRect(
        sidebar_x,
        sidebar_bottom,
        sidebar_width,
        sidebar_top - sidebar_bottom,
        9,
        fill=1,
        stroke=0,
    )

    left_x = sidebar_x + 14
    left_width = sidebar_width - 28
    y = sidebar_top - 17
    y = draw_section_heading(canvas, "个人简介", left_x, y, left_width)
    y = draw_wrapped(
        canvas,
        "现任上海复志有限公司应用工程师，以供应商团队成员身份驻场支持安踏，负责 3D 打印软件开发与结构设计。具备参数化设计、Python 自动化及数字制造实践经验。",
        left_x,
        y,
        left_width,
        size=8.6,
        leading=11.7,
    )
    y -= 5
    y = draw_section_heading(canvas, "核心技能", left_x, y, left_width)
    y = draw_skill_card(canvas, left_x, y, left_width, "3D 打印软件", "Python, 工作流开发, 工具封装")
    y = draw_skill_card(canvas, left_x, y, left_width, "结构 / 参数化", "Rhino, Grasshopper, GHPython")
    y = draw_skill_card(canvas, left_x, y, left_width, "CAD 系统", "CadQuery, OpenCascade, Three.js")
    y = draw_skill_card(canvas, left_x, y, left_width, "AI / Agent", "ORCA AI, Claude Code, Codex")
    y = draw_skill_card(canvas, left_x, y, left_width, "数字制造", "3D 打印, 晶格, 拓扑优化")

    y -= 1
    y = draw_section_heading(canvas, "教育经历", left_x, y, left_width)
    canvas.setFillColor(TEXT)
    canvas.setFont("Deng-Bold", 9.5)
    canvas.drawString(left_x, y, "新南威尔士大学（UNSW）")
    y -= 15
    canvas.setFillColor(MUTED)
    canvas.setFont("Deng", 8.2)
    canvas.drawString(left_x, y, "本科 · 参数化设计")
    y -= 12
    canvas.drawString(left_x, y, "2023.01-2026.12")
    y -= 17
    draw_wrapped(
        canvas,
        "主攻参数化设计、计算设计与数字建造。",
        left_x,
        y,
        left_width,
        size=8.2,
        leading=11,
        color=MUTED,
    )

    main_x = 216
    main_width = PAGE_WIDTH - main_x - 40
    y = sidebar_top - 5
    y = draw_section_heading(canvas, "工作与实习经历", main_x, y, main_width)

    y = draw_experience(
        canvas,
        y,
        "上海复志有限公司",
        "应用工程师",
        "2026.08-至今",
        [
            "作为供应商团队成员，在福建泉州晋江驻场支持安踏。",
            "负责 3D 打印软件开发与结构设计，服务鞋类研发与制造场景。",
        ],
    )
    y = draw_experience(
        canvas,
        y,
        "曲率流动深圳有限公司",
        "ORCA AI 开发",
        "2026.05-2026.07",
        ["参与 ORCA AI 产品开发与功能迭代，推进自然语言到可制造 3D CAD 的工作流落地。"],
    )
    y = draw_experience(
        canvas,
        y,
        "卡宾",
        "参数化设计师（正式工作）",
        "2026.03-2026.05.22",
        [
            "使用 Grasshopper 搭建鞋类参数化流程，提升开发灵活性与复用效率。",
            "主导鞋体内部晶格化方案，并结合 GHPython 与 Agent 工具提升迭代效率。",
        ],
    )
    y = draw_experience(
        canvas,
        y,
        "arch manu",
        "结构设计师（实习）",
        "2025.06-2025.08",
        ["构建 Ameba 拓扑优化工作流，将性能驱动结果转化为可制造网格与 3D 打印样件。"],
    )
    y = draw_experience(
        canvas,
        y,
        "杭州椒图幕墙",
        "建筑工程师（实习）",
        "2024.11-2025.02",
        ["开发幕墙成本优化与自动出图流程，材料成本降低约 15%，出图效率提升约 70%。"],
    )
    draw_experience(
        canvas,
        y,
        "广州博厦建筑设计研究院有限公司",
        "建筑设计师（实习）",
        "2024.07-2024.09",
        ["完成 Rhino 高精度建模与 V-Ray 方案可视化，支持设计汇报与决策展示。"],
    )

    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(main_x, 49, main_x + main_width, 49)
    canvas.setFillColor(MUTED)
    canvas.setFont("Deng", 7.5)
    canvas.drawRightString(main_x + main_width, 35, "更新于 2026.08")

    canvas.showPage()
    canvas.save()


if __name__ == "__main__":
    build_resume()
