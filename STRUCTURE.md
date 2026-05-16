# RAYGOO Parts — 网站详细结构

> **风格**：工业机械重型设备风（Heavy-Industrial / Hazard-Striped）
> **关键视觉**：全屏 hero · 板块切割 · 安全黄+石墨黑 · NM 系列耐磨钢叙事
> **公司**：Fujian Raygoo Machinary Co., Ltd. — 母站 https://www.raygoo-loader.com/
> **产品定位**：重型机械易损件 / 耐磨件外贸供应商
> **承诺**：30 分钟内回复 RFQ

---

## 1. 设计语言（Design Tokens）

| 项目 | 规范 |
|------|------|
| 主色 | `#0A0A0B` 石墨黑 / `#15171C` 面板黑 / `#FFD400` 安全黄（主强调）/ `#FF6B00` 警示橙 |
| 文本 | `#E7E5E0` 米白 / `#9CA3AF` 钢灰 |
| 字体 | 标题 **Oswald / Rajdhani**（粗壮工业等宽窄体）· 正文 Inter · 标签 JetBrains Mono |
| 容器 | **直角**（border-radius: 0）· 1–2px 工业线条边 |
| 板块切割 | `clip-path: polygon(...)` 斜切 + 整段 hazard-stripe（黄黑 45° 条纹）作章节分隔 |
| 网格底纹 | `grid-mesh`：黄色细网格 + 工程图纸背景 |
| 动效 | framer-motion · 进入横向滑入 · 悬浮扫光 |
| 按钮 | 黄底黑字粗体 + 反色描边款 · 全大写 + `→` 箭头 |
| 滚动条 | 黄色（`#FFD400`）滑块、黑色轨道（工业刻度感） |

---

## 2. 整站目录结构 / URL Map

```
/                                  Home（全屏 Hero）
├── /excavator-buckets             Excavator Buckets 分类
│     ├── /rock-excavator-bucket
│     ├── /gp-excavator-bucket
│     └── /heavy-duty-excavator-bucket
│
├── /bucket-teeth                  Bucket Teeth & Adapters 分类
│     ├── /j200-bucket-teeth
│     ├── /j300-bucket-teeth
│     ├── /j450-bucket-teeth
│     ├── /pc200-bucket-teeth      （Komatsu PC200 系列）
│     └── /e330-bucket-teeth       （CAT E330 / J400 系列）
│
├── /nm500-wear-plates             NM500 Wear Plates 分类
│     ├── /nm500-wear-plate
│     ├── /nm400-wear-plate
│     └── /chromium-carbide-overlay-plate
│
├── /dump-truck-liners             Dump Truck Liners 分类
│     ├── /dump-truck-body-liner
│     ├── /dump-truck-tailgate-liner
│     └── /dump-truck-floor-liner
│
├── /blog                          Blog 列表
│     ├── /blog/how-to-choose-bucket-teeth
│     ├── /blog/j200-vs-j300
│     ├── /blog/replace-bucket-teeth
│     ├── /blog/nm400-vs-nm500
│     ├── /blog/dump-truck-liner-bolt-on
│     └── /blog/loader-maintenance
│
├── /about                         About Us
└── /contact                       Contact（含 RFQ 表单）
```

合计：**1 首页 + 4 分类页 + 14 产品页 + 1 Blog 列表 + 6 文章 + About + Contact = 28 页**（next build 共 34 路由）

---

## 3. 公共组件

### 3.1 Header（fixed top）
- 顶部 4px hazard 黄黑斜条
- 左：黄边方块 RG logo + `RAYGOO PARTS` + 副标 `Heavy Machinery Wear Parts`
- 中：横向导航，每项悬浮变成黄底黑字
- 右：电话号码（xl 显示）+ `Request Quote` 黄色 CTA
- 滚动后 80→56px 收窄，黑底带模糊

### 3.2 Footer
- 顶部 hazard 厚条
- 黄底搜索条（沿用 raygoo-loader.com 习惯）
- 4 列：品牌信息 / Navigate / Products / Contact（含电话/邮箱/WhatsApp/地址）
- 底部版权条 + 母站链接 raygoo-loader.com

### 3.3 FloatingContact（右侧贴边）
- 黄底黑边竖向叠贴：WhatsApp / E-Mail / Phone / Top
- 类似 raygoo-loader.com 右侧 Tracy/E-Mail/WeChat 浮动条
- 黑色阴影 4px 偏移强调工业感

### 3.4 SectionDivider
- `[INDEX]  TITLE  ──刻度线──  RIGHT META`
- 工业刻度尺感分隔，章节级编号

### 3.5 CTASection
- 上下 hazard 黄黑条夹击 + 中间黄底黑字大标语
- 三按钮：Get Quote / WhatsApp / Call
- 出现在所有产品页、分类页、博客文章页底部

---

## 4. 首页（Home）板块

| Section | 内容 |
|---------|------|
| **S1 Hero（100svh）** | 左：超大 `BUILT TO OUTLAST THE GROUND.`（黄/白分行）+ 副标 + 三按钮 + `// 30-minute reply` 黄字。右：斜切（polygon clip）的黄色板块叠 NM500 钢板贴图，hazard 顶/底带，4 项数据条（68 国家/10+ 年/NM400-NM550/30min） |
| **S2 Product Lines** | 4 个 `PanelSplit` 全宽板块切割，左右交替，每个 60vh。分别是 Excavator Buckets / Bucket Teeth / NM500 Wear Plates / Dump Truck Liners，配 bullet 三点 + 黄边 CTA |
| **S3 Featured Parts** | 6 个特色产品卡（黄色品牌顶栏）+ 滚动揭示 |
| **S4 NM Series Datasheet** | hazard 细条夹击 + 黄表头 NM360/NM400/NM450/NM500/NM550 硬度/厚度/用途表，配大标 `NM SERIES WEAR STEEL` |
| **S5 Why Choose RAYGOO** | 4 项工业线图标卡片（带序号 01-04） |
| **S6 Applications** | Mining / Quarry / Construction / Steel & Cement，4 张深色滤镜大图 + 黄标签 |
| **S7 Browse Catalogue** | 4 大分类速览卡 |
| **S8 CTA** | hazard 黄黑大条带 RFQ 块 |

---

## 5. 分类页模板（4 个通用）

```
H1 Hero（60vh，全宽分类大图 + 渐黑遮罩 + 黄网格 + chip + h-display）
↓ hazard 厚条
↓ SectionDivider 「01 PRODUCT LIST · N ITEMS」
↓ 3 列产品卡片网格（黄品牌顶栏 + 暗卡身 + 黄价格）
↓ CTASection（hazard 夹击）
```

---

## 6. 产品详情页模板（14 个通用）

```
1. Hero strip：chip + 大标题 H1 + 短描述 + hazard 细条
2. Body 双列：
   - 左：ProductGallery（主图 + 三缩略，黄边激活，工程刻度图层）
   - 右：
     · 5 行规格表（part / material / hardness / spec / delivery）— 黑底+黄列名
     · 价格交期双格（左黄底「PRICE RANGE」/ 右黑底「DELIVERY」）
     · Suitable for 标签云
     · Key Benefits 黄勾选清单
     · 三按钮 Get Quote / WhatsApp / Call + 30-min 提示
3. Related Products（同类 3 个）
4. CTASection（hazard）

JSON-LD：Product schema（含 sku / brand / image / lowPrice / highPrice）
```

---

## 7. About / Contact / Blog

- **About**：55vh hero（工厂照 + 黄网格）+ 公司故事 + 4 项数据卡（68 国家 / 10+ 年 / 500+ SKU / 30min）+ 母站链接 + CTA
- **Contact**：40vh hero + 左信息卡（公司/电话/WhatsApp/邮箱/地址）+ 右黄边 RFQ 表单（黑底黄边输入框）+ `/api/contact` POST
- **Blog 列表**：40vh hero + 三列卡片网格（黄边底栏分隔）
- **Blog 文章**：碳黑 hero + 极窄正文容器 + 大图 + 段落 + Related + CTA

---

## 8. SEO

- 每页独立 title/description/canonical/OG
- `Product` JSON-LD（产品页）
- `/sitemap.xml`、`/robots.txt` 自动生成
- 关键词矩阵覆盖：`excavator bucket`、`bucket teeth`、`NM500 wear plate`、`dump truck liner`、`J200/J300/PC200/E330` 等
- 图片懒加载、Next/Image 自动响应式

---

## 9. 上线前 Checklist

- [x] 全屏 100svh Hero
- [x] 板块切割 / hazard 黄黑分隔条贯穿全站
- [x] 黑底安全黄主调（vs 之前白底过亮）
- [x] 右侧 FloatingContact 浮动条
- [x] 每个产品页含 **价格范围** + 交期
- [x] 多处「reply within 30 minutes」
- [x] 14 产品页（>10）
- [x] Contact 表单可提交（API console.log，待接 Resend/SMTP）
- [x] sitemap / robots / Product JSON-LD
- [x] `next build` 通过：34 路由
