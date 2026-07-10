# 华之喻官网首页：设计与 Angular 实现交接包

> **本副本的远程仓库**:`huazhiyu-web-claude`(Claude 实现线)。同一交接包分发给多个 AI 各自实现,每个实现推送到自己的独立仓库,互不合并,最终择优。

本目录面向第一次接触项目的全栈开发者。它不是营销文案库，也不是一份只描述视觉感觉的设计稿说明，而是一套可以分阶段实施、逐项验收的工程规格。

## 先读什么

1. `docs/design/00-project-context.md`
2. `docs/design/01-architecture-decisions.md`
3. `docs/design/02-design-tokens.md`
4. `docs/design/03-global-layout.md`
5. `docs/design/04-shared-components.md`
6. `docs/design/05-homepage-sections.md`
7. `docs/design/06-motion-system.md`
8. `docs/design/07-responsive-accessibility.md`
9. `docs/design/08-inquiry-upload-flow.md`
10. `docs/design/09-implementation-plan.md`
11. `docs/design/10-new-developer-audit.md`
12. `docs/design/11-acceptance-checklist.md`

`AGENTS.md` 是 Codex 的入口说明。  
`IMPLEMENTATION_PLAN.md` 是按 Phase 执行的简版计划。

## 已确认的范围

首页只有六个主要 section：

1. Hero
2. 核心服务入口
3. 为什么选择华之喻
4. 专业依据
5. 代表性工作
6. 提交新事项

“提交新事项”是首页的核心转化功能。它允许用户选择事项类型、填写联系方式、补充最多 500 个中文字符的事项说明，并可选上传 Word、PDF 等材料。它不是 AI 问答机器人。

## 暂未确认、不得擅自补充

- 最终营销文案
- 最终数据
- 人员姓名
- 代表案例标题
- 客户 Logo
- 最终表单字段全集
- 文件大小上限与留存策略
- 后端部署方式
- 具体 OSS bucket、域名和权限配置
