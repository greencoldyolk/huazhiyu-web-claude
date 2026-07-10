/**
 * Site content placeholders — Phase 1.
 *
 * 依据 AGENTS.md:不得发明文案、数据、人名、案例名。
 * 本文件只存放「明确标注为占位」的字符串,最终文案批准后在此替换。
 * (对应 docs/design/01 建议结构中的 core/config 职责。)
 */
export const SITE_CONTENT = {
  siteName: {
    zh: '华之喻', // 来源:现有 logo,最终 SVG logo 资产待提供(docs/design/10 第 12 条)
    en: 'Huazhiyu',
  },
  logoAlt: '华之喻知识产权 Huazhiyu IP(占位,待最终 logo 资产)',
  placeholders: {
    heroTitle: '首页主标题占位',
    footerNote: '页脚信息占位(备案号、联系方式等待确认)',
  },
} as const;
