# SiliconOracle AI

黑白科技风 AI 工具导航网站，灵感来自苹果官网式的留白、玻璃拟态与高级产品橱窗布局。

## 功能

- 首页动态粒子背景
- 顶部搜索栏与分类筛选
- AI聊天、AI绘图、AI视频、AI办公分类
- 工具卡片入场与悬浮动画
- 暗黑 / 明亮模式切换
- 移动端响应式导航与卡片布局

## 技术栈

- TypeScript
- 原生 Web Components 风格的 DOM 渲染
- CSS Variables / CSS Grid / Backdrop Filter
- Vite 构建与预览，生产产物输出到 `dist/`

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建完成后，静态文件会输出到 `dist/`，可直接作为 Vercel 的 Output Directory。
