# Aesthetic Knowledge Specification

This project is a designer-facing background knowledge system, not a gallery of surface decoration. A style entry should help someone recognize the style, understand why it looks that way, and deliberately transfer its logic into a new interface, identity, poster, product, or spatial concept.

The rules in this document are the project-local source of truth. They may later become the basis of a reusable Digital Aesthetic Museum skill.

## 1. Experience Contract

Desktop uses a **single pinned-stage scroll narrative** (`390vh` scroll track + `100svh sticky` viewport) with no persistent sidebar:

1. Lightweight museum header (`美学收集馆` + current style Chinese name + search button)
2. Full-bleed style hero in the center of the stage (only `theme.name` is shown on the hero)
3. Scroll stage 1 (`progress 0.16 → 0.59`): 8 frameless style specimens float around the perimeter while leaving the center hero visible
4. Scroll stage 2 (`progress 0.56 → 1.00`): 4 frameless classic-work image cards float into the four corners while the hero title fades out cleanly beforehand
5. Fixed global timeline docked at the bottom center of the viewport

Small screens (`<= 720px`) and `prefers-reduced-motion: reduce` automatically fall back to a clean vertical flow.

The global timeline is the only style switcher. It always stays above the page content and keeps the same structure and interaction:

- chronological order;
- one entry per style;
- clear current state;
- click or keyboard activation switches style and returns to the top;
- desktop shows the full chronology when space permits;
- small screens allow horizontal access without creating a second navigation;
- page content reserves enough bottom space so the timeline never covers the final content.

The timeline skin changes with the current style, but its information architecture must not. Visual skin may change background, border, radius, shadow, typeface, marker shape, and active color. It must not change item order, labels, hit areas, or navigation behavior.

When switching styles on the timeline, the viewport must crossfade in place (`is-switching` opacity fade-out → instant scroll reset at `opacity: 0` → opacity fade-in) so the page never rewinds or slides vertically across scroll stages.

## 2. Knowledge Model for Every Style

Each style must answer the following designer questions.

### 2.1 Context and worldview

- When and where did it emerge?
- Which technologies, economies, subcultures, or social expectations shaped it?
- What did its original audience believe the future, everyday life, or good design should feel like?
- Which problem was the style reacting to?

This is causal background, not a decorative mood description.

### 2.2 Formal grammar

Document the repeatable visual rules:

- **Composition:** grid, alignment, density, balance, cropping, hierarchy.
- **Space:** compact or expansive, layered or flat, symmetrical or asymmetric.
- **Shape:** geometric vocabulary, corner behavior, outlines, scale relationships.
- **Color:** palette roles, contrast, saturation, temperature, proportion of use.
- **Typography:** families, weight range, width, scale, casing, rhythm, alignment.
- **Image language:** photography, illustration, rendering, texture, framing, treatment.
- **Material and surface:** paper, glass, chrome, plastic, grain, transparency, gloss.
- **Iconography:** construction, stroke, dimensionality, metaphor, consistency.
- **Motion:** speed, easing, direction, continuity, transition metaphor.

A useful rule must be specific enough to reproduce. “Use bright colors” is not a rule; “reserve one high-chroma accent for status and keep large surfaces cool and pale” is.

### 2.3 Interaction language

Explain how the style behaves, not only how it looks:

- what appears clickable;
- how controls acknowledge input;
- whether navigation is explicit, exploratory, mechanical, editorial, or playful;
- how layers open and close;
- how loading, progress, selection, error, and success are expressed;
- which motion and sound metaphors fit the style;
- which accessibility accommodations preserve the style without reducing usability.

### 2.4 Content voice

Define:

- sentence length and density;
- labeling style;
- degree of technical, institutional, domestic, playful, or editorial language;
- preferred naming patterns;
- words and tones that would feel historically or aesthetically false.

Visible UI copy should remain concise. Longer context belongs in structured reference material, not on top of artwork.

### 2.5 Production recipes

Every style needs practical recipes for transfer into new work. Include at least:

- one layout recipe;
- one color recipe;
- one typography recipe;
- one surface or component recipe;
- one interaction or motion recipe.

Each recipe should contain measurable or selectable decisions, such as ratios, roles, size relationships, border behavior, or motion duration. Recipes are starting systems, not mandatory templates.

### 2.6 Application guidance

Describe how the grammar changes across:

- product interface;
- marketing or editorial page;
- visual identity;
- poster or social graphic;
- physical or spatial application.

Separate the invariant principles from medium-specific execution.

### 2.7 Real references and evidence

Every style requires at least four verified references. Each reference needs:

- real image;
- title;
- creator or organization;
- year or active period;
- source URL or provenance;
- a short factual reason it is relevant.

Do not use generated decoration, unrelated stock imagery, or a modern imitation as historical evidence.

### 2.8 Boundaries and misuse

State:

- what the style is commonly confused with;
- which visual shortcuts turn it into caricature;
- which elements are historically essential;
- which elements may be adapted;
- when the style is a poor fit for the task;
- accessibility risks such as low contrast, excessive motion, dense type, or ambiguous controls.

## 3. Required Data Shape

A future style entry should be able to satisfy this conceptual contract:

```ts
type AestheticKnowledge = {
  context: {
    period: string;
    origin: string[];
    drivers: string[];
    reactionAgainst: string[];
    worldview: string;
  };
  grammar: {
    composition: string[];
    space: string[];
    shape: string[];
    color: string[];
    typography: string[];
    imagery: string[];
    material: string[];
    iconography: string[];
    motion: string[];
  };
  interaction: {
    navigation: string[];
    controls: string[];
    feedback: string[];
    transitions: string[];
    accessibility: string[];
  };
  voice: {
    traits: string[];
    namingPatterns: string[];
    avoid: string[];
  };
  recipes: Array<{
    medium: "interface" | "editorial" | "identity" | "graphic" | "spatial";
    title: string;
    decisions: string[];
  }>;
  references: Array<{
    title: string;
    creator: string;
    year: string;
    image: string;
    source: string;
    relevance: string;
  }>;
  boundaries: {
    confusedWith: string[];
    essential: string[];
    adaptable: string[];
    avoid: string[];
  };
};
```

The visible museum does not need to display every field at once. The schema exists to support future design tools, comparisons, prompts, exports, and the reusable skill.

## 4. Content Density Rules

### Hero

Show the style name. A short translated name is optional. Do not overlay a thesis, archive number, keyword row, or explanation bubble.

### Specimen card

Show the visual specimen, specimen name, and compact identifier. Detailed reasoning opens on demand.

### Reference card

Show the real image, title, and year. Creator and provenance may appear in the detail view.

### Detail view

Prefer structured facts, tokens, and recipes over paragraphs. Do not repeat the same description in the card, drawer, and page.

## 5. Adding a New Style

1. Establish the context and boundaries before selecting visual motifs.
2. Define the formal and interaction grammar.
3. Create production recipes that can generate work in more than one medium.
4. Add the style to the single `museumThemes` source.
5. Create a timeline skin without changing timeline structure.
6. Add a real hero and at least four verified references.
7. Check that specimens demonstrate rules rather than merely matching colors.
8. Verify desktop and mobile navigation, keyboard focus, contrast, reduced motion, and bottom-content clearance.
9. Run formatting, TypeScript checks, and the production build.

## 6. Skill Extraction Boundary

Keep this specification project-local while the collection and knowledge model are still evolving. Extract it into a reusable skill only after:

- multiple additional styles have been authored with the same contract;
- the field set has remained stable across those styles;
- production recipes have been tested on real design tasks;
- timeline and content interactions no longer require project-specific exceptions.

## 7. Handoff Guide & Missing Classic Assets Backlog

### 7.1 Summary of Guardrails for Collaborating AIs

| Category                   | Rules                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **能改 (Can Modify)**      | 补全 `src/museumData.ts` 中缺失的 `ClassicWork.image`；将远程图片本地化到 `public/classics/<themeId>/<workId>.jpg`；用有真实高清档案图的同风格代表作替换难找图的条目；精修非 Aero 风格的 `.motif-*` 标本细节。 |
| **不要改 (Do Not Modify)** | 桌面端固定舞台（Pinned Stage）滚动叙事结构；四周无底板独立漂浮布局；切换风格时的原地淡入淡出逻辑（严禁恢复 `scroll-behavior: smooth`）；Frutiger Aero 的 8 个原生标本实现；底部全局时间轴的 DOM 与定位。       |
| **能加 (Can Add)**         | `public/classics/<themeId>/` 下的真实历史参考图；遵循完整规范的新风格展厅；仅在点击打开后的右侧抽屉（Drawer）内呈现的结构化设计知识。                                                                          |
| **不能加 (Do Not Add)**    | 左右侧边栏或二级目录；主视觉上的档案编号、口号、解释气泡；经典作品卡片左上角的类型气泡（如“网络档案”）；用 CSS 几何色块或无关图库照片伪造的“假参考图”；页面表面的说教式 AI 引导文案。                          |

### 7.2 Asset Storage & Data Wiring Convention

1. Save verified reference images under:
   ```text
   public/classics/<themeId>/<workId>.jpg
   ```
   (`.png` or `.webp` is also acceptable if appropriate, recommended resolution around `960px–1200px` on the long edge.)
2. Wire the path in `src/museumData.ts` on the matching `ClassicWork` object:
   ```ts
   {
     id: "wii-menu",
     title: "Wii Menu",
     maker: "Nintendo",
     year: "2006",
     image: "/classics/aero/wii-menu.jpg",
   }
   ```
3. Once `image` is populated, `ClassicGallery` and `ClassicDrawer` automatically replace `图像待补` with the real image. No JSX changes in `src/App.tsx` are needed.

### 7.3 Current Classic Works Inventory (12 Completed / 16 Missing)

#### `aero` — Frutiger Aero（已完成 2 / 待补 2）

- [x] `vista-aero` — Windows Vista Aero (`Microsoft`, `2006`) — 已配图
- [x] `bliss` — Bliss 与 Windows XP (`Charles O’Rear / Microsoft`, `2001`) — 已配图
- [ ] **待补** `wii-menu` — Wii Menu (`Nintendo`, `2006`) → 建议路径：`/classics/aero/wii-menu.jpg`（真实 Wii 主菜单频道网格界面截图）
- [ ] **待补** `windows-7` — Windows 7 (`Microsoft`, `2009`) → 建议路径：`/classics/aero/windows-7.jpg`（真实 Windows 7 Aero Glass 桌面与任务栏截图）

#### `y2k` — Y2K（已完成 2 / 待补 2）

- [x] `imac-g3` — iMac G3 (`Apple / Jony Ive`, `1998`) — 已配图
- [x] `minidisc` — Sony MiniDisc (`Sony`, `1992—2000s`) — 已配图
- [ ] **待补** `wipeout` — Wipeout 视觉系统 (`The Designers Republic`, `1995`) → 建议路径：`/classics/y2k/wipeout.jpg`（WipEout 游戏包装、界面或 The Designers Republic 标志性图形设计实拍/截图）
- [ ] **待补** `flip-phone` — 翻盖手机时代 (`Nokia / Motorola / Sony Ericsson`, `1999—2005`) → 建议路径：`/classics/y2k/flip-phone.jpg`（Motorola RAZR V3 或千禧年银色翻盖手机实拍图）

#### `brutal` — Soft Brutalism（已完成 4 / 待补 0）

- [x] `brutalist-websites` — Brutalist Websites (`/classics/brutal/brutalist-websites.jpg`)
- [x] `yale-art` — Yale School of Art Website (`/classics/brutal/yale-art.jpg`)
- [x] `craigslist` — Craigslist (`/classics/brutal/craigslist.jpg`)
- [x] `arena` — Are.na (`/classics/brutal/arena.jpg`)

#### `cottage` — Cottagecore（已完成 1 / 待补 3）

- [x] `morris-marigold` — African Marigold (`William Morris`, `1876`) — 已配图
- [ ] **待补** `arts-crafts` — Arts and Crafts Movement (`英国工艺美术运动`, `1880—1920`) → 建议路径：`/classics/cottage/arts-crafts.jpg`（Red House、Morris & Co. 室内织物或工艺美术运动家具/书籍装帧实拍图）
- [ ] **待补** `botanical-plate` — 植物学图谱 (`自然观察传统`, `18—19 世纪`) → 建议路径：`/classics/cottage/botanical-plate.jpg`（18–19 世纪古典植物学铜版设色图谱，如 Redouté 或 Curtis's Botanical Magazine）
- [ ] **待补** `seed-packets` — Vintage Seed Packets (`种子商与印刷工坊`, `19—20 世纪`) → 建议路径：`/classics/cottage/seed-packets.jpg`（19–20 世纪早期彩色石印园艺种子袋/目录封面的真实档案图）

#### `memphis` — Memphis Revival（已完成 1 / 待补 3）

- [x] `carlton` — Carlton Room Divider (`Ettore Sottsass`, `1981`) — 已配图
- [ ] **待补** `tahiti` — Tahiti Lamp (`Ettore Sottsass`, `1981`) → 建议路径：`/classics/memphis/tahiti.jpg`（Ettore Sottsass 1981 年 Tahiti 台灯馆藏实拍图）
- [ ] **待补** `first-collection` — Memphis First Collection (`Memphis Group`, `1981`) → 建议路径：`/classics/memphis/first-collection.jpg`（Memphis Milano 1981 首批家具/展览或 Casablanca 柜、Beverly 椅等真实馆藏照片）
- [ ] **待补** `memphis-revival` — Memphis Revival (`当代品牌与动态图形`, `2010s—`) → 建议路径：`/classics/memphis/memphis-revival.jpg`（Camille Walala 等孟菲斯复兴代表性空间/平面作品实拍图）

#### `aqua` — Aqua / Skeuomorphism（已完成 0 / 待补 4）

- [ ] **待补** `mac-aqua` — Mac OS X Aqua (`Apple`, `2000`) → 建议路径：`/classics/aqua/mac-aqua.jpg`（Mac OS X 10.0–10.4 含水滴按钮、条纹窗口与 Dock 的真实界面截图）
- [ ] **待补** `itunes` — Early iTunes (`Apple`, `2001`) → 建议路径：`/classics/aqua/itunes.jpg`（早期 iTunes 拉丝金属窗口与液晶状态区真实截图）
- [ ] **待补** `ios-6` — iOS 6 (`Apple`, `2012`) → 建议路径：`/classics/aqua/ios-6.jpg`（iOS 6 主屏幕、拟物图标或皮革/绒布质感应用真实截图）
- [ ] **待补** `dashboard` — Mac OS X Dashboard (`Apple`, `2005`) → 建议路径：`/classics/aqua/dashboard.jpg`（Mac OS X Tiger Dashboard 拟物小组件真实截图）

#### `swiss` — Swiss Style（已完成 2 / 待补 2）

- [x] `beethoven` — Beethoven Poster (`Josef Müller-Brockmann`, `1955`) — 已配图
- [x] `der-film` — Der Film (`Josef Müller-Brockmann`, `1960`) — 已配图
- [ ] **待补** `neue-grafik` — Neue Grafik (`Lohse / Müller-Brockmann / Neuburg / Vivarelli`, `1958—1965`) → 建议路径：`/classics/swiss/neue-grafik.jpg`（《Neue Grafik》杂志封面或内页网格版面实拍图）
- [ ] **待补** `helvetica` — Helvetica (`Max Miedinger / Eduard Hoffmann`, `1957`) → 建议路径：`/classics/swiss/helvetica.jpg`（Haas 铸字厂 Neue Haas Grotesk / Helvetica 早期字体标本册或经典海报实拍图）

### 7.4 Verification Checklist After Adding Assets

Run all three checks before finishing:

```bash
pnpm exec oxfmt --check src/App.tsx src/index.css src/museumData.ts AGENTS.md docs/AESTHETIC_KNOWLEDGE_SPEC.md
pnpm exec tsc --noEmit
pnpm build
```
