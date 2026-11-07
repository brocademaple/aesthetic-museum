export type ThemeId = "swiss" | "memphis" | "y2k" | "aqua" | "aero" | "cottage" | "brutal";

export type Exhibit = {
  id: string;
  number: string;
  title: string;
  en: string;
  description: string;
  detail: string;
  keywords: string[];
  visual: number;
};

export type ClassicWork = {
  id: string;
  title: string;
  maker: string;
  year: string;
  type?: string;
  note?: string;
  watch?: string[];
  image?: string;
};

export type MuseumTheme = {
  id: ThemeId;
  name: string;
  zhName: string;
  era: string;
  caption: string;
  thesis: string;
  curatorialNote: string;
  hero?: string;
  timelineStart: number;
  timelineEnd: number;
  colors: string[];
  dimensions: { label: string; value: string }[];
  exhibits: Exhibit[];
  classics: ClassicWork[];
};

const createExhibits = (
  theme: string,
  items: Array<[string, string, string, string[]]>,
): Exhibit[] =>
  items.map(([title, en, description, keywords], index) => ({
    id: `${theme}-${index + 1}`,
    number: String(index + 1).padStart(2, "0"),
    title,
    en,
    description,
    keywords,
    visual: index,
    detail: `${description}。这个标本通过${keywords.slice(0, 3).join("、")}建立风格辨识度。观察它的材质、比例与信息层级，而不只是表面的颜色，才能将这一语言准确地转化到当代设计中。`,
  }));

export const museumThemes: MuseumTheme[] = [
  {
    id: "aero",
    name: "Frutiger Aero",
    zhName: "自然科技乐观主义",
    era: "2004—2013",
    timelineStart: 2004,
    timelineEnd: 2013,
    caption: "科技乐观主义 · 通透蓝绿 · 玻璃与自然",
    thesis: "一个相信科技可以与自然和谐共生的年代",
    curatorialNote: "它不只是蓝绿色毛玻璃，而是一套关于清洁技术、自然生命与友好未来的完整想象。",
    hero: "https://images.unsplash.com/photo-1786819713152-fc31ee5366ae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
    colors: ["#7EC8E3", "#A8E6CF", "#FFFFFF80", "#F5F9FC", "#4FC3F7"],
    dimensions: [
      { label: "材质", value: "玻璃、水、光泽塑料" },
      { label: "形状", value: "气泡、胶囊、柔软圆角" },
      { label: "动效", value: "漂浮、折射、柔和光晕" },
    ],
    classics: [
      {
        id: "vista-aero",
        title: "Windows Vista Aero",
        maker: "Microsoft",
        year: "2006",
        type: "操作系统界面",
        note: "半透明窗口、高光边框和具有景深的桌面，将屏幕塑造成一层可以触摸的玻璃。",
        watch: ["窗口边缘的折射", "透明层级", "柔和的状态反馈"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/42/VirtualBox_Windows_Vista_SP2_08_01_2025_10_05_26crop3.png",
      },
      {
        id: "bliss",
        title: "Bliss 与 Windows XP",
        maker: "Charles O’Rear / Microsoft",
        year: "2001",
        type: "桌面视觉",
        note: "蓝天与草坡成为全球最熟悉的数字入口，也奠定了自然与个人电脑并置的视觉记忆。",
        watch: ["极简地平线", "高明度自然色", "没有技术焦虑的桌面"],
        image:
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Bliss_location%2C_Sonoma_Valley_in_2006.jpg/960px-Bliss_location%2C_Sonoma_Valley_in_2006.jpg",
      },
      {
        id: "wii-menu",
        title: "Wii Menu",
        maker: "Nintendo",
        year: "2006",
        type: "家庭娱乐界面",
        note: "白色频道网格、天蓝状态和温和提示音，让数字设备显得轻松、家庭化且友好。",
        watch: ["低压力留白", "圆角频道卡片", "声音与界面的一致性"],
      },
      {
        id: "windows-7",
        title: "Windows 7",
        maker: "Microsoft",
        year: "2009",
        type: "操作系统界面",
        note: "它保留 Aero Glass 的通透感，同时降低 Vista 的装饰密度，展示一种更成熟的使用方式。",
        watch: ["克制的玻璃效果", "任务栏光泽", "自然主题壁纸"],
      },
    ],
    exhibits: createExhibits("aero", [
      ["水珠玻璃", "AQUA GLASS", "凝结在透明表面的清晨露珠", ["折射", "高光", "透明", "清新"]],
      ["天空气泡", "SKY BUBBLE", "漂浮于晴空的轻盈透明球体", ["漂浮", "圆润", "虹彩", "轻盈"]],
      ["Vista 光晕", "VISTA FLARE", "穿过玻璃界面的柔和日光", ["晨光", "光晕", "乐观", "柔焦"]],
      [
        "草地地平线",
        "GREEN HORIZON",
        "自然世界与清洁科技的交界",
        ["草坡", "蓝天", "生态", "Vista"],
      ],
      [
        "半透明按钮",
        "GLASS CONTROL",
        "像糖果与玻璃制成的控制器",
        ["拟物", "控制器", "圆角", "反馈"],
      ],
      ["蓝绿渐变", "AQUA GRADIENT", "海水、薄荷与天空的流动过渡", ["水色", "薄荷", "流动", "明亮"]],
      ["小鸟剪影", "BIRDS IN FLIGHT", "远空中掠过的自由生命", ["生命", "远空", "自由", "动势"]],
      ["液晶高光", "LCD GLOSS", "来自旧日数码设备的清亮反光", ["数码", "反光", "清洁", "千禧"]],
    ]),
  },
  {
    id: "y2k",
    name: "Y2K",
    zhName: "千禧数码未来",
    era: "1997—2004",
    timelineStart: 1997,
    timelineEnd: 2004,
    caption: "消费电子 · 铬银虹彩 · 网络新世界",
    thesis: "未来曾经像一张闪亮的光盘，被装进透明塑料外壳",
    curatorialNote:
      "Y2K 并不等于黑色赛博朋克。它更明亮、更青春，也更接近翻盖手机、CD 和早期互联网带来的未来期待。",
    hero: "https://images.unsplash.com/photo-1783250971734-78489d9f2088?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
    colors: ["#DCE6ED", "#B8FF35", "#8C7CFF", "#C9F7FF", "#5B5F6D"],
    dimensions: [
      { label: "材质", value: "铬金属、透明塑料、虹彩" },
      { label: "形状", value: "星形、椭圆、机械胶囊" },
      { label: "动效", value: "扫描、解码、旋转与弹跳" },
    ],
    classics: [
      {
        id: "imac-g3",
        title: "iMac G3",
        maker: "Apple / Jony Ive",
        year: "1998",
        type: "消费电子",
        note: "透明彩色外壳把电脑从灰色办公设备变成了可以摆进家庭的未来物件。",
        watch: ["透明外壳", "糖果配色", "内部结构的可见性"],
        image:
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Mac_OS_9_on_iMac_G3.jpg/960px-Mac_OS_9_on_iMac_G3.jpg",
      },
      {
        id: "minidisc",
        title: "Sony MiniDisc",
        maker: "Sony",
        year: "1992—2000s",
        type: "便携音乐设备",
        note: "银色机身、微型屏幕和机械控制将音乐压缩进一件精密的掌心设备。",
        watch: ["金属与塑料", "微型液晶屏", "实体按键层级"],
        image:
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Sony_MZ_R500_minidisc_player.jpg/960px-Sony_MZ_R500_minidisc_player.jpg",
      },
      {
        id: "wipeout",
        title: "Wipeout 视觉系统",
        maker: "The Designers Republic",
        year: "1995",
        type: "游戏与品牌视觉",
        note: "虚构企业、数字编号和高速排版把完整的未来商业世界带进游戏。",
        watch: ["虚构品牌系统", "高速信息层级", "音乐与图形的同步"],
      },
      {
        id: "flip-phone",
        title: "翻盖手机时代",
        maker: "Nokia / Motorola / Sony Ericsson",
        year: "1999—2005",
        type: "移动设备",
        note: "像素菜单、软按键和发光状态灯，构成了移动互联网最早的日常想象。",
        watch: ["软按键逻辑", "像素图标", "掌心尺寸的信息密度"],
      },
    ],
    exhibits: createExhibits("y2k", [
      [
        "铬金属字体",
        "CHROME TYPE",
        "像液态银一样反射环境的立体文字",
        ["铬银", "立体", "反射", "未来"],
      ],
      [
        "CD 虹彩",
        "DISC IRIDESCENCE",
        "随角度游移的光谱与数据载体",
        ["虹彩", "光盘", "光谱", "旋转"],
      ],
      ["透明塑料", "CLEAR PLASTIC", "暴露内部结构的消费电子外壳", ["透明", "硬件", "外壳", "结构"]],
      [
        "像素图标",
        "PIXEL ICONS",
        "低分辨率屏幕里的微型符号系统",
        ["像素", "图标", "低分辨率", "网络"],
      ],
      [
        "翻盖界面",
        "FLIP PHONE UI",
        "掌心设备中的分层菜单与软按键",
        ["手机", "菜单", "按键", "设备"],
      ],
      [
        "DV 时间码",
        "DV TIMECODE",
        "私人影像中的日期、时间与录制状态",
        ["DV", "录像", "时间码", "记忆"],
      ],
      [
        "酸性状态灯",
        "ACID STATUS",
        "用高亮绿表达连接、能量与在线",
        ["酸性绿", "状态", "信号", "在线"],
      ],
      [
        "千禧编码",
        "MILLENNIUM CODE",
        "对新世纪的编号、倒计时与系统想象",
        ["编码", "日期", "系统", "千禧"],
      ],
    ]),
  },
  {
    id: "brutal",
    name: "Soft Brutalism",
    zhName: "柔性粗野主义",
    era: "2018—NOW",
    timelineStart: 2018,
    timelineEnd: 2025,
    caption: "裸露结构 · 编辑秩序 · 直接而友好",
    thesis: "不隐藏界面的结构，也不牺牲阅读与使用的温度",
    curatorialNote:
      "Soft Brutalism 不是故意做丑，而是用诚实的结构、强烈的排版和适度的不完美，抵抗过度修饰。",
    hero: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
    colors: ["#F2EFE8", "#1B1B1B", "#FF5B3D", "#B8D8FF", "#F4D35E"],
    dimensions: [
      { label: "材质", value: "纸张、墨色、裸露结构" },
      { label: "形状", value: "矩形、粗边框、错位网格" },
      { label: "动效", value: "硬切、推入、即时反色" },
    ],
    classics: [
      {
        id: "brutalist-websites",
        title: "Brutalist Websites",
        maker: "Pascal Deville",
        year: "2014—",
        image: "/classics/brutal/brutalist-websites.jpg",
      },
      {
        id: "yale-art",
        title: "Yale School of Art Website",
        maker: "Yale School of Art Community",
        year: "持续更新",
        image: "/classics/brutal/yale-art.jpg",
      },
      {
        id: "craigslist",
        title: "Craigslist",
        maker: "Craigslist",
        year: "1995—",
        image: "/classics/brutal/craigslist.jpg",
      },
      {
        id: "arena",
        title: "Are.na",
        maker: "Are.na",
        year: "2011—",
        image: "/classics/brutal/arena.jpg",
      },
    ],
    exhibits: createExhibits("brutal", [
      ["粗边框", "HEAVY BORDER", "让内容边界和点击区域毫不隐藏", ["边框", "结构", "直接", "功能"]],
      [
        "超大标题",
        "OVERSIZED TYPE",
        "以压倒性的字号建立编辑层级",
        ["大字", "层级", "排版", "宣言"],
      ],
      ["裸露网格", "EXPOSED GRID", "把构图骨架直接变成视觉内容", ["网格", "骨架", "秩序", "版面"]],
      [
        "原生按钮",
        "HONEST BUTTON",
        "看起来就能够被按下的直接控制器",
        ["按钮", "反馈", "功能", "诚实"],
      ],
      [
        "高对比标签",
        "CONTRAST LABEL",
        "像编辑批注一样明确标记信息",
        ["标签", "反色", "索引", "信息"],
      ],
      ["纸张纹理", "PAPER GRAIN", "为数字界面加入印刷与触摸痕迹", ["纸张", "颗粒", "印刷", "触感"]],
      [
        "刻意错位",
        "CONTROLLED OFFSET",
        "用可控的不对齐打破过度精致",
        ["错位", "张力", "不完美", "节奏"],
      ],
      [
        "编辑式排版",
        "EDITORIAL SYSTEM",
        "以编号、栏线和留白组织阅读",
        ["编辑", "编号", "留白", "阅读"],
      ],
    ]),
  },
  {
    id: "cottage",
    name: "Cottagecore",
    zhName: "田园生活浪漫主义",
    era: "2010s—NOW",
    timelineStart: 2010,
    timelineEnd: 2025,
    caption: "季节植物 · 手工痕迹 · 缓慢日常",
    thesis: "把生活重新交还给季节、双手与有时间痕迹的物件",
    curatorialNote:
      "Cottagecore 不只是米色和花朵。地方感、劳动痕迹、自然材料与缓慢的生活叙事，才是它真正的核心。",
    hero: "https://images.unsplash.com/photo-1781058868650-a9d6cc18a753?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
    colors: ["#F4EBD8", "#7D916B", "#D8A64D", "#A55248", "#C9B7A4"],
    dimensions: [
      { label: "材质", value: "亚麻、木材、旧纸与陶土" },
      { label: "形状", value: "植物曲线、织物格纹、手工边缘" },
      { label: "动效", value: "翻页、展开、风吹与缓慢浮现" },
    ],
    classics: [
      {
        id: "morris-marigold",
        title: "African Marigold",
        maker: "William Morris",
        year: "1876",
        type: "织物图案",
        note: "植物并非装饰性散落，而是经过严密重复构成一片持续生长的平面。",
        watch: ["植物的重复秩序", "手工线条", "有限而深沉的配色"],
        image:
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Morris_African_Marigold_textile_drawing_1876.jpg/960px-Morris_African_Marigold_textile_drawing_1876.jpg",
      },
      {
        id: "arts-crafts",
        title: "Arts and Crafts Movement",
        maker: "英国工艺美术运动",
        year: "1880—1920",
        type: "设计运动",
        note: "对材料、劳动与日常器物的尊重，构成了 Cottagecore 更深层的历史来源。",
        watch: ["材料诚实", "手工劳动", "图案进入日常生活"],
      },
      {
        id: "botanical-plate",
        title: "植物学图谱",
        maker: "自然观察传统",
        year: "18—19 世纪",
        type: "科学插画",
        note: "精确观察与诗意构图共存，让知识记录本身也具有安静的审美价值。",
        watch: ["留白与标注", "比例观察", "科学和诗意的平衡"],
      },
      {
        id: "seed-packets",
        title: "Vintage Seed Packets",
        maker: "种子商与印刷工坊",
        year: "19—20 世纪",
        type: "日常包装",
        note: "小型包装把植物图像、品种信息和地方商业浓缩在可被保存的纸片上。",
        watch: ["小尺度排版", "手绘植物", "生活化的信息设计"],
      },
    ],
    exhibits: createExhibits("cottage", [
      [
        "野花标本",
        "WILD HERBARIUM",
        "记录季节与地方气候的植物切片",
        ["野花", "季节", "标本", "地方"],
      ],
      ["亚麻织物", "LINEN CLOTH", "带有纤维和褶皱的日常底色", ["亚麻", "织物", "褶皱", "天然"]],
      [
        "手写标签",
        "HANDWRITTEN LABEL",
        "像果酱瓶与种子袋上的私人注释",
        ["手写", "标签", "私人", "日常"],
      ],
      [
        "植物插画",
        "BOTANICAL DRAWING",
        "介于科学观察与温柔想象之间的线条",
        ["植物", "插画", "线描", "观察"],
      ],
      [
        "格纹碎花",
        "CHECKS & FLORALS",
        "来自桌布、裙装与旧墙纸的重复节奏",
        ["格纹", "碎花", "图案", "家居"],
      ],
      [
        "木质器物",
        "WOODEN OBJECTS",
        "保留使用痕迹与材料纹理的工具",
        ["木材", "器物", "手工", "痕迹"],
      ],
      ["旧书纸张", "AGED PAPER", "泛黄边缘与书页之间的安静时间", ["旧书", "纸张", "时间", "阅读"]],
      [
        "蜂蜜果酱色",
        "PANTRY PALETTE",
        "从厨房储藏罐提取的温暖色谱",
        ["蜂蜜", "果酱", "暖色", "食物"],
      ],
    ]),
  },
  {
    id: "memphis",
    name: "Memphis Revival",
    zhName: "孟菲斯复兴",
    era: "1981—NOW",
    timelineStart: 1981,
    timelineEnd: 2025,
    caption: "大胆几何 · 原色碰撞 · 反严肃秩序",
    thesis: "让设计重新变得顽皮、意外，并拒绝唯一正确的秩序",
    curatorialNote:
      "Memphis 不是随机散落几何图形，而是对颜色、密度与不平衡关系进行精确编排，再用幽默感打破严肃。",
    colors: ["#F6EBD8", "#F04E45", "#2E78C7", "#F4C542", "#42B9A8"],
    dimensions: [
      { label: "材质", value: "层压板、颗粒图案、亮色涂层" },
      { label: "形状", value: "积木、波浪线、圆点与锯齿" },
      { label: "动效", value: "弹跳、旋转、拼装与错拍" },
    ],
    classics: [
      {
        id: "carlton",
        title: "Carlton Room Divider",
        maker: "Ettore Sottsass",
        year: "1981",
        type: "家具与雕塑",
        note: "书架被改造成图腾式结构，功能、色彩和幽默在同一件物体中发生冲突。",
        watch: ["不稳定的对称", "层压板色彩", "家具与雕塑的边界"],
        image:
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Carlton_Bookcase%2C_by_Ettore_Sottsass%2C_1981%2C_wood_veneer_and_plastic_laminate%2C_Inv._FNAC_1980%2C_Mus%C3%A9e_des_Arts_D%C3%A9coratifs%2C_Paris_%2801%29.png/960px-Carlton_Bookcase%2C_by_Ettore_Sottsass%2C_1981%2C_wood_veneer_and_plastic_laminate%2C_Inv._FNAC_1980%2C_Mus%C3%A9e_des_Arts_D%C3%A9coratifs%2C_Paris_%2801%29.png",
      },
      {
        id: "tahiti",
        title: "Tahiti Lamp",
        maker: "Ettore Sottsass",
        year: "1981",
        type: "灯具",
        note: "台灯被塑造成一只颜色鲜明的鸟，证明功能物件也可以拥有角色和幽默。",
        watch: ["角色化轮廓", "原色切分", "功能与玩笑并存"],
      },
      {
        id: "first-collection",
        title: "Memphis First Collection",
        maker: "Memphis Group",
        year: "1981",
        type: "设计展览",
        note: "一组家具与物件共同拒绝现代主义的冷静规范，建立了完整的反严肃世界。",
        watch: ["物件之间的共同语法", "图案密度", "有控制的失衡"],
      },
      {
        id: "memphis-revival",
        title: "Memphis Revival",
        maker: "当代品牌与动态图形",
        year: "2010s—",
        type: "视觉复兴",
        note: "几何、波浪与原色重新进入数字界面，但也更容易被简化成表面图案。",
        watch: ["原作与复兴的差异", "几何节奏", "避免随机堆砌"],
      },
    ],
    exhibits: createExhibits("memphis", [
      [
        "几何积木",
        "GEOMETRIC BLOCKS",
        "像玩具一样可以重新拼装的基础形状",
        ["几何", "积木", "模块", "玩具"],
      ],
      ["波浪线", "SQUIGGLE LINE", "拒绝机械秩序的自由曲线", ["波浪", "曲线", "自由", "节奏"]],
      [
        "颗粒图案",
        "CONFETTI PATTERN",
        "在留白中制造速度和视觉噪点",
        ["颗粒", "图案", "密度", "噪点"],
      ],
      [
        "原色组合",
        "PRIMARY CLASH",
        "红黄蓝与青绿之间大胆而可控的碰撞",
        ["原色", "碰撞", "高饱和", "平衡"],
      ],
      [
        "不对称构图",
        "ASYMMETRIC STAGE",
        "用失衡创造方向与观看顺序",
        ["不对称", "构图", "方向", "张力"],
      ],
      ["彩色层叠", "COLOR STACK", "让形状像舞台布景一样前后交叠", ["层叠", "空间", "色块", "舞台"]],
      [
        "图形化家具",
        "OBJECT SCULPTURE",
        "介于家具、雕塑与玩笑之间的物件",
        ["家具", "雕塑", "物件", "幽默"],
      ],
      [
        "玩具感图标",
        "PLAYFUL ICON",
        "用简单符号建立轻快的操作反馈",
        ["图标", "玩具", "反馈", "轻快"],
      ],
    ]),
  },
  {
    id: "aqua",
    name: "Aqua / Skeuomorphism",
    zhName: "可触摸的数字世界",
    era: "2000—2013",
    timelineStart: 2000,
    timelineEnd: 2013,
    caption: "果冻控件 · 拟物材质 · 友好反馈",
    thesis: "在触摸屏普及以前，数字界面先学会了模仿真实世界",
    curatorialNote: "屏幕曾经被做成一组看起来可以按下、翻动和触摸的真实物件。",
    colors: ["#4A90E2", "#B8E8FF", "#D7F26D", "#F6F7F2", "#8E9BA7"],
    dimensions: [
      { label: "材质", value: "果冻、金属、皮革与纸张" },
      { label: "形状", value: "胶囊控件、立体图标、真实物件" },
      { label: "动效", value: "按压、翻页、弹性与物理反馈" },
    ],
    classics: [
      {
        id: "mac-aqua",
        title: "Mac OS X Aqua",
        maker: "Apple",
        year: "2000",
        type: "操作系统界面",
        note: "条纹进度条、果冻按钮和湿润高光，把计算机控制器变成可以感知体积的物件。",
        watch: ["控件的可按压感", "高光塑造体积", "一致的水感隐喻"],
      },
      {
        id: "itunes",
        title: "Early iTunes",
        maker: "Apple",
        year: "2001",
        type: "媒体播放器",
        note: "拉丝金属、圆形控制器与播放器隐喻，让数字音乐延续实体设备的操作记忆。",
        watch: ["硬件式控制器", "金属材质", "播放行为的视觉映射"],
      },
      {
        id: "ios-6",
        title: "iOS 6",
        maker: "Apple",
        year: "2012",
        type: "移动操作系统",
        note: "拟物化在移动端达到高峰：书架、皮革、纸张和真实工具帮助用户理解陌生的触摸界面。",
        watch: ["现实隐喻", "应用图标体积", "材质与功能的关联"],
      },
      {
        id: "dashboard",
        title: "Mac OS X Dashboard",
        maker: "Apple",
        year: "2005",
        type: "桌面小工具",
        note: "天气、时钟和便笺以独立物件漂浮在桌面上，构成一张数字工作台。",
        watch: ["物件化组件", "阴影与悬浮", "现实工具的数字转译"],
      },
    ],
    exhibits: createExhibits("aqua", [
      [
        "果冻按钮",
        "JELLY BUTTON",
        "通过高光和内阴影呈现可按压体积",
        ["果冻", "按压", "高光", "反馈"],
      ],
      [
        "拉丝金属",
        "BRUSHED METAL",
        "模拟消费电子面板的细密金属纹理",
        ["金属", "面板", "硬件", "纹理"],
      ],
      [
        "拟物图标",
        "SKEUOMORPHIC ICON",
        "将工具和物件浓缩成立体应用图标",
        ["图标", "物件", "立体", "隐喻"],
      ],
      [
        "皮革纸张",
        "LEATHER & PAPER",
        "用熟悉材料解释数字内容的用途",
        ["皮革", "纸张", "熟悉", "触感"],
      ],
      [
        "糖果滚动条",
        "CANDY SCROLL",
        "带条纹与高光的操作进度提示",
        ["条纹", "滚动", "状态", "糖果"],
      ],
      [
        "Dock 倒影",
        "DOCK REFLECTION",
        "让应用像陈列品一样站在反光台面上",
        ["倒影", "Dock", "陈列", "空间"],
      ],
      [
        "桌面小工具",
        "DASHBOARD WIDGET",
        "把天气、时钟和便笺变成独立物件",
        ["组件", "工具", "桌面", "物件"],
      ],
      ["翻页反馈", "PAGE TURN", "用物理世界的运动解释内容切换", ["翻页", "物理", "转场", "反馈"]],
    ]),
  },
  {
    id: "swiss",
    name: "Swiss Style",
    zhName: "国际主义排版",
    era: "1950s—1970s",
    timelineStart: 1950,
    timelineEnd: 1979,
    caption: "理性网格 · 无衬线字体 · 清晰秩序",
    thesis: "让结构退到幕后，让信息以最准确的方式被看见",
    curatorialNote: "网格不是装饰，而是一种建立关系、节奏和清晰度的方法。",
    colors: ["#F4F2EA", "#111111", "#E33B2E", "#1B5FA7", "#B8B8B2"],
    dimensions: [
      { label: "材质", value: "纸张、摄影、纯色色块" },
      { label: "形状", value: "模块网格、圆与直线、非对称版面" },
      { label: "动效", value: "精确位移、遮罩、理性节奏" },
    ],
    classics: [
      {
        id: "beethoven",
        title: "Beethoven Poster",
        maker: "Josef Müller-Brockmann",
        year: "1955",
        type: "音乐海报",
        note: "同心弧线将音乐节奏转化为严格几何，动态与秩序在同一网格中成立。",
        watch: ["几何的音乐性", "非对称平衡", "信息与图形的比例"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/01/Josef_M%C3%BCller-Brockmann._beethoven_poster%281955%29.jpg",
      },
      {
        id: "der-film",
        title: "Der Film",
        maker: "Josef Müller-Brockmann",
        year: "1960",
        type: "展览海报",
        note: "摄影、文字与斜向结构共同制造观看路径，展示网格并不意味着静止。",
        watch: ["斜向运动", "摄影裁切", "极少元素的层级"],
        image:
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Josef_M%C3%BCller-Brockmann_der_Film.jpg/960px-Josef_M%C3%BCller-Brockmann_der_Film.jpg",
      },
      {
        id: "neue-grafik",
        title: "Neue Grafik",
        maker: "Lohse / Müller-Brockmann / Neuburg / Vivarelli",
        year: "1958—1965",
        type: "设计期刊",
        note: "这本期刊系统传播了国际主义排版的理论、案例与跨语言视觉标准。",
        watch: ["模块化封面", "多语言信息", "系统化编辑"],
      },
      {
        id: "helvetica",
        title: "Helvetica",
        maker: "Max Miedinger / Eduard Hoffmann",
        year: "1957",
        type: "字体设计",
        note: "中性的字形并不意味着没有个性，而是让比例、空间和内容承担表达。",
        watch: ["字面与留白", "中性中的节奏", "字号建立层级"],
      },
    ],
    exhibits: createExhibits("swiss", [
      [
        "模块网格",
        "MODULAR GRID",
        "用稳定关系组织不同尺度的信息",
        ["网格", "模块", "秩序", "比例"],
      ],
      [
        "无衬线字体",
        "GROTESK TYPE",
        "用克制字形让内容而非装饰成为主角",
        ["无衬线", "字体", "清晰", "中性"],
      ],
      [
        "非对称平衡",
        "ASYMMETRIC BALANCE",
        "通过重量和留白而非镜像建立稳定",
        ["非对称", "平衡", "留白", "重量"],
      ],
      ["摄影裁切", "PHOTO CROP", "用果断取景把摄影变成版面结构", ["摄影", "裁切", "构图", "焦点"]],
      [
        "红黑白",
        "RED BLACK WHITE",
        "以有限色彩建立高效视觉优先级",
        ["红色", "黑白", "强调", "克制"],
      ],
      [
        "斜向动势",
        "DIAGONAL MOTION",
        "在理性网格中引入速度和方向",
        ["斜线", "运动", "方向", "张力"],
      ],
      [
        "信息编号",
        "INDEX SYSTEM",
        "用编号和坐标帮助复杂内容被快速定位",
        ["编号", "索引", "信息", "定位"],
      ],
      [
        "客观图标",
        "OBJECTIVE SYMBOL",
        "以最少形状建立跨语言识别",
        ["图标", "符号", "跨语言", "简化"],
      ],
    ]),
  },
];

export const getTheme = (id: ThemeId) =>
  museumThemes.find((theme) => theme.id === id) ?? museumThemes[0];
