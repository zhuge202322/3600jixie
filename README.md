# RG Loader Parts — Website

机械线条工业风格的轮式装载机配件外贸网站。

## 技术栈

- Next.js 14 (App Router) + TypeScript
- TailwindCSS（直角主题、工业色板）
- framer-motion（滚动揭示 / 横向拖拽）
- lucide-react 图标

## 本地开发

```bash
npm install
npm run dev
# http://localhost:3000
```

## 构建 & 启动

```bash
npm run build
npm start
```

## 目录结构

- `src/app/` — 页面与 API 路由
- `src/components/` — 公共组件（Header / Footer / ProductCard / ProductDetail / CTA 等）
- `src/data/` — 产品、分类、博客、站点元数据
- `STRUCTURE.md` — 网站详细结构
- `PLAN.md` — 开发计划

## 关键检查（上线前）

- ✅ 每页有 WhatsApp 浮动按钮
- ✅ 每个产品页有价格范围
- ✅ 多处出现 "reply within 30 minutes"
- ✅ 11 个产品页 ≥ 10
- ✅ Contact 表单可提交（默认 `/api/contact` 仅 console.log，请接入 Resend/SMTP/CRM）

## 自定义

- 修改 `src/data/site.ts` 替换 WhatsApp 号、Email、域名
- 替换 `picsum.photos` 占位图为真实产品图
- 邮件投递：在 `src/app/api/contact/route.ts` 接入服务
