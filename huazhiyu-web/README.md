# 华之喻官网(huazhiyu-web)

武汉华之喻知识产权代理事务所官网前端。Angular 22 · standalone 组件 · SCSS + CSS 自定义属性 · SSR/prerender 混合渲染。

> **仓库**:`huazhiyu-web-claude`(Claude 实现线)。同一份设计文档另有其他 AI 的独立实现仓库,各仓库互不合并;最终择优选定一版继续。仓库根目录是 `patent-web-fable` 交接包(含 `docs/design/` 与本应用)。

设计与实施规格见仓库根目录 `docs/design/00` 至 `11`,执行约束见 `AGENTS.md`,阶段计划见 `IMPLEMENTATION_PLAN.md`。当前进度:**Phase 4(签名视觉:Hero 分层视觉与指针视差、证据段材质与琥珀弧线、工作面板纹理、提交段深色半透明化与琥珀角光)**。

## 环境

- Node 24 LTS(见 `.nvmrc`)
- npm 10+

## 常用命令

```bash
npm install        # 安装依赖
npm start          # 开发服务器 http://localhost:4200
npm run build      # 生产构建(含首页 prerender)
npm test           # 单元测试(vitest)
npm run lint       # angular-eslint
npm run serve:ssr:huazhiyu-web   # 运行 SSR 产物(dist/huazhiyu-web/server/server.mjs)
```

## 结构速览

```text
src/
├── styles/            # 设计 tokens、断点、reset、排版、容器、无障碍、motion 常量
└── app/
    ├── content/       # 占位文案集中配置(最终文案批准后在此替换)
    ├── layout/        # site-header / site-footer 壳
    └── pages/home/    # 首页 + sections/(六个 section 组件)
```

渲染策略:公开静态路由 prerender(`src/app/app.routes.server.ts`),客户端水合。
