# 李昌朔 · Personal Portfolio

李昌朔的个人作品集网站，聚焦参数化设计、AI 产品开发与数字制造。

## 内容

- ORCA AI 开发与工作经历
- 鞋类晶格生成、幕墙成本优化、Ameba 拓扑优化等代表项目
- Grasshopper、Rhino、GHPython、Python、Agent 与 MCP 工具栈
- 可下载的中文简历

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 构建

```bash
# 原 Sites / Worker 构建
npm run build

# GitHub Pages 静态导出，产物位于 out/
npm run build:pages
```

`main` 分支更新后，GitHub Actions 会自动构建并发布 GitHub Pages。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- CSS

## 许可

网站代码可用于学习和参考。个人简历、姓名、联系方式与作品内容未经许可不得复制或用于商业用途。
