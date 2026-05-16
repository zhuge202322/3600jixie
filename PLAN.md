# 开发计划（Development Plan v2）

## 技术栈

- **框架**：Next.js 14（App Router）+ TypeScript
- **样式**：TailwindCSS — 自定义工业暗色调色板（ink/carbon/steel/iron/gold/signal）
- **动效**：framer-motion（Hero 横向滑入、PanelSplit 双向揭示、Reveal）
- **图标**：lucide-react
- **字体**：Oswald（标题工业感）/ Inter / JetBrains Mono / Rajdhani
- **表单**：原生 fetch + react-hook-form 已不依赖（保持轻量）
- **部署**：Next.js framework，build 通过即可上 Vercel/Netlify

## 目录结构

```
src/
├── app/
│   ├── layout.tsx                # 全局：Header + Footer + FloatingContact + 字体
│   ├── page.tsx                  # Home（Hero + 4 PanelSplit + 数据表 + 应用 + CTA）
│   ├── excavator-buckets/page.tsx
│   ├── bucket-teeth/page.tsx
│   ├── nm500-wear-plates/page.tsx
│   ├── dump-truck-liners/page.tsx
│   ├── [slug]/page.tsx           # 14 个产品详情（动态 SSG）
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx      # 6 篇文章 SSG
│   ├── about/page.tsx
│   ├── contact/page.tsx + ContactForm.tsx
│   ├── api/contact/route.ts
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Header.tsx                # fixed top + hazard 条
│   ├── Footer.tsx                # 黄搜索条 + 4 列 + 母站链接
│   ├── FloatingContact.tsx       # 右侧 WhatsApp/Mail/Phone/Top
│   ├── Hero.tsx                  # 全屏 100svh，斜切黄板
│   ├── PanelSplit.tsx            # 左右交替全宽板块
│   ├── SectionDivider.tsx        # [INDEX] 标题 ─── meta
│   ├── CTASection.tsx            # hazard 夹击 RFQ 块
│   ├── ProductCard.tsx           # 黄品牌顶栏 + 暗卡身
│   ├── ProductDetail.tsx         # 产品详情主体
│   ├── ProductGallery.tsx
│   ├── CategoryTemplate.tsx      # 60vh hero + 网格 + CTA
│   └── Reveal.tsx                # framer-motion 滚动揭示
└── data/
    ├── site.ts                   # Raygoo 公司真实信息
    ├── categories.ts             # 4 大分类
    ├── products.ts               # 14 个产品
    └── posts.ts                  # 6 篇文章
```

## 已完成开发步骤

1. ✅ **数据层**：四大分类（excavator-buckets / bucket-teeth / nm500-wear-plates / dump-truck-liners），14 个产品（含 J200/J300/J450/PC200/E330 + 3 桶 + 3 NM 板 + 3 衬板），6 篇文章
2. ✅ **公司信息**：Fujian Raygoo Machinary Co., Ltd. + 真实电话 +86 13695940108、邮箱 raygoo@raygoo.com、地址、母站链接
3. ✅ **主题重构**：去白底亮色调，统一为石墨黑底 + 安全黄强调；hazard 黄黑斜条作分割线；engineering grid mesh
4. ✅ **公共组件全部重写**：Header（fixed + hazard）、Footer（黄搜索条 + 4 列）、FloatingContact（右侧浮条）、SectionDivider、CTASection（hazard 夹击）、ProductCard（黄品牌顶栏）、ProductDetail（黑底黄列名规格表）、CategoryTemplate（60vh hero）
5. ✅ **首页**：100svh Hero（黄板斜切 + 数据条）+ 4 个 PanelSplit（左右交替）+ NM 系列耐磨钢数据表 + Why Choose 4 卡 + 应用场景 4 卡 + CTA
6. ✅ **产品页 14 个 + 分类 4 个 + Blog 6 + About + Contact**
7. ✅ **SEO**：每页独立 metadata、Product JSON-LD、sitemap.xml、robots.txt
8. ✅ **构建验证**：`next build` 通过，共 34 路由

## 后续可优化

- 替换 picsum 占位图为客户真实产品图（白底 / 实拍 / 包装）
- `/api/contact` 接入 Resend / SMTP 真实投递
- Hero 背景图换为客户视频或自有大图
- 添加多语言（继承 raygoo-loader.com 的 ee/ar/ja/srla/ko/si）
- 接入 Google Analytics / Tag Manager
