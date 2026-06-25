# kclkll.github.io

我的个人网站，基于 Next.js + Tailwind CSS 构建。

## 🚀 开始使用

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run start
```

## 📁 项目结构

```
├── src/
│   ├── app/              # Next.js App Router 页面
│   │   ├── page.tsx      # 首页
│   │   ├── about/        # 关于页面
│   │   ├── portfolio/    # 作品集页面
│   │   └── contact/      # 联系页面
│   ├── components/        # React 组件
│   └── lib/              # 工具函数
├── public/               # 静态资源
└── .github/workflows/    # GitHub Actions 部署配置
```

## ✨ 页面预览

- **首页** - 展示个人介绍和核心技能
- **关于** - 个人故事、技术栈、兴趣爱好
- **作品集** - 项目作品展示
- **联系** - 联系方式和留言表单

## 🚢 部署

本项目配置了 GitHub Actions，会在推送到 `main` 分支时自动部署到 GitHub Pages。

## 📝 自定义

1. 修改 `src/app/layout.tsx` 中的个人信息
2. 更新各页面中的占位内容
3. 修改 `src/components/Footer.tsx` 中的社交链接
4. 更新 `src/app/portfolio/page.tsx` 中的项目信息

---

Built with ❤️ using Next.js and Tailwind CSS
