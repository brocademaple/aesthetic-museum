# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

Tailwind emits utility classes in `@layer utilities`, and CSS outside any cascade layer overrides every layer regardless of specificity. Put global element styles, such as resets and defaults for `body`, headings, `button`, or `input`, inside `@layer base { ... }` so utility classes on those elements still apply. Tailwind's Preflight already applies `box-sizing: border-box`, removes default margins, and sets `font: inherit` on form controls, so do not repeat those rules.

## Museum Experience Rules

Read `docs/AESTHETIC_KNOWLEDGE_SPEC.md` before adding a new aesthetic style or changing the exhibition structure.

### 1. 哪些不要改（Locked Architecture & Interaction — DO NOT MODIFY）

- **不要改单视口固定舞台（Pinned Stage）结构**：桌面端每个展厅统一使用 `390vh` 滚动轨道 + `100svh sticky` 固定视口，滚动进度依次驱动「首屏主视觉 → 8 个无底板标本环绕上浮 → 4 个经典作品独立上浮」。
- **不要改无底板悬浮原则**：8 个标本和 4 个经典作品必须作为独立对象分布在画面四周，中间至少留出 60% 主视觉区域。严禁给标本层或经典作品层加整块毛玻璃大底板、大卡片容器、全屏模糊或遮挡主视觉的背景板。
- **不要改风格切换的原地淡入淡出逻辑**：点击底部时间轴切换风格时，必须保持「原地柔和淡出 → 在 `opacity: 0` 时用 `behavior: "instant"` 归零滚动位置与舞台变量 → 原地柔和淡入新展厅首屏」。严禁恢复 `html { scroll-behavior: smooth }` 或触发纵向快速回滚倒放动画。
- **不要改 Frutiger Aero 的 8 个原生标本视觉组件**：`src/App.tsx` 中 `theme.id === "aero"` 对应的 `droplet-visual`、`bubble-visual`、`flare-visual`、`horizon`、`button-visual`、`gradient-visual`、`birds-visual`、`lcd-visual` 是锁定的高质感原生标本，严禁用普通照片或简化圆圈替换。
- **不要改全局时间轴的唯一导航地位与 DOM 结构**：固定在视口底部的 `.global-timeline` 是唯一的展厅切换器。切换风格只能改变其 CSS 皮肤（背景、边框、圆角、阴影、字体、节点形状与强调色），不能改变节点顺序、位置或交互方式。

### 2. 哪些不能加（Forbidden Additions — DO NOT ADD）

- **不能加左侧边栏、右侧边栏或顶部/二级目录**：不允许再出现“博物馆序厅 → 展厅漫游”流程条、侧栏目录或第二套风格切换入口。
- **不能加主视觉废话与气泡**：主视觉（Hero）只允许展示风格名称（`theme.name`），严禁添加 `VISUAL CULTURE · ARCHIVE` 编号、副标题口号（`caption`）、策展宣言（`thesis`）或右下角半透明说明气泡。
- **不能加经典作品卡片上的多余标签**：经典作品卡片表面只允许展示「真实图片 + 作品名称 + 年份」，严禁在图片左上角叠加“网络档案 / 协作式网站 / 编辑设计”等分类气泡，也不要在卡片表面堆砌作者副标题或长段解释。
- **不能用生成式图形或无关图库图冒充经典作品**：没有真实历史参考图时，保持 `archive-unavailable`（显示“图像待补”），严禁画 CSS 几何图形、渐变色块或随便塞一张不相关的 Unsplash 风景/抽象图来凑数。
- **不能在页面表面堆砌 AI 味总结废话**：不要在区块标题旁、页脚或卡片上添加“先看作品……”“不要只记住表面符号……”之类的说教式引导语。

### 3. 哪些能改（Allowed Modifications）

- **能补全缺失的经典作品真实图片（最高优先级）**：为 `src/museumData.ts` 中目前缺少 `image` 字段的 16 个 `ClassicWork` 条目补充真实、可考证的历史作品截图、海报、工业设计照片或界面档案图（详见 `docs/AESTHETIC_KNOWLEDGE_SPEC.md` 第 7 节清单）。
- **能把外链图片本地化**：可将现有的 Wikimedia / Unsplash 远程图片下载保存到 `public/classics/<themeId>/<workId>.jpg`，并更新 `src/museumData.ts` 中的路径，提升加载稳定性。
- **能替换更为考究的经典案例**：如果某个现有未配图条目难以找到高清真实图，可以替换为同一风格下更具代表性、且有真实高清档案图的经典作品（需同步更新 `id`、`title`、`maker`、`year`、`image`）。
- **能优化非 Aero 展厅的标本视觉精度**：在不破坏无底板悬浮布局的前提下，可以提升 `y2k`、`brutal`、`cottage`、`memphis`、`aqua`、`swiss` 的 `.motif-*` 标本细节质感。

### 4. 哪些能加（Allowed Additions）

- **能按规范新增美学风格展厅**：在 `src/museumData.ts` 的 `museumThemes` 中新增风格条目（需包含完整时间轴起止年份、主视觉、8 个标本、4 个带真实图片的经典作品），并在 `src/index.css` 中补充对应的 `.theme-<id>` 页面变量、`.theme-<id> .global-timeline` 时间轴皮肤和 8 个 `.motif-<id>` 标本样式。
- **能丰富点击后的详情抽屉（Drawer）结构化知识**：用户点击标本或经典作品打开右侧抽屉后，可以在抽屉内部补充面向设计师的结构化背景知识（如配色比例、排版规则、材质参数、设计配方、来源出处），但未点击时的主舞台必须保持极简克制。
