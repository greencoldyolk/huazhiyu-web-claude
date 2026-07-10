/**
 * Site content placeholders — Phase 2.
 *
 * 依据 AGENTS.md:不得发明文案、数据、人名、案例名。
 * 本文件只存放「明确标注为占位」的字符串,最终文案批准后在此集中替换。
 * (对应 docs/design/01 建议结构中的 core/config 职责。)
 *
 * 唯一的非占位内容:六个 section 的信息架构名称(已批准,见 README「已确认的范围」)
 * 与「专利申请」特殊卡占位名(docs/design/04 明确指定)。
 */
export const SITE_CONTENT = {
  siteName: {
    zh: '华之喻', // 来源:现有 logo,最终 SVG logo 资产待提供(docs/design/10 第 12 条)
    en: 'Huazhiyu',
  },
  // 现有 logo 上的全称(来源:assets/reference/current-logo.png)
  logoAlt: '武汉华之喻知识产权代理有限公司 Wuhan Huazhiyu Intellectual Property Agency Ltd.',

  hero: {
    titleLine1: '主标题第一行占位',
    titleAccent: '渐变短语占位',
    lead: '一段简短的定位说明占位,最终文案待批准。',
    primaryCta: '提交新事项',
    secondaryLink: '了解核心服务(占位)',
    // 三个要点,文字取自业主认可的 mock,最终文案仍待批准
    points: [
      { label: '专业团队', desc: '技术与法律双重理解' },
      { label: '高效赋能', desc: '快速响应,省心托付' },
      { label: '务实透明', desc: '清晰流程,合理收费' },
    ],
  },

  services: {
    heading: '核心服务入口',
    intro: '服务导语占位,最终文案待批准。',
    items: [
      // 第一张为暖色特殊卡(docs/design/04 指定「专利申请」为其占位名)
      { index: '01', title: '专利申请(占位)', desc: '服务说明占位,一到两句话。', warm: true },
      { index: '02', title: '服务方向占位二', desc: '服务说明占位,一到两句话。', warm: false },
      { index: '03', title: '服务方向占位三', desc: '服务说明占位,一到两句话。', warm: false },
      { index: '04', title: '服务方向占位四', desc: '服务说明占位,一到两句话。', warm: false },
      { index: '05', title: '服务方向占位五', desc: '服务说明占位,一到两句话。', warm: false },
      { index: '06', title: '服务方向占位六', desc: '服务说明占位,一到两句话。', warm: false },
    ],
  },

  advantages: {
    heading: '为什么选择华之喻',
    intro: '编辑式导语占位:用两三句话概括差异化定位,最终文案待批准。',
    items: [
      { index: '01', title: '差异化优势占位一', desc: '一句展开说明占位。' },
      { index: '02', title: '差异化优势占位二', desc: '一句展开说明占位。' },
      { index: '03', title: '差异化优势占位三', desc: '一句展开说明占位。' },
    ],
  },

  evidence: {
    heading: '专业依据',
    intro: '导语占位:2–3 条真实事实,数据经确认后填入。',
    // 不得发明数据:value 一律用占位文字,真实数字确认后替换
    facts: [
      { value: '事实占位', label: '事实说明占位(真实数据待确认)' },
      { value: '事实占位', label: '事实说明占位(真实数据待确认)' },
      { value: '事实占位', label: '事实说明占位(真实数据待确认)' },
    ],
  },

  work: {
    heading: '代表性工作',
    intro: '导语占位,最终文案待批准。',
    featured: {
      index: '01',
      category: '类别占位',
      title: '代表性工作标题占位',
      summary: '两三句概述占位:背景、动作与结果的骨架,真实案例经确认后替换。',
      link: '查看详情(占位)',
    },
    secondary: [
      { index: '02', title: '次要工作条目占位一', link: '查看详情(占位)' },
      { index: '03', title: '次要工作条目占位二', link: '查看详情(占位)' },
    ],
  },

  inquiry: {
    heading: '提交新事项',
    intro: '导语占位:说明提交后会发生什么,最终文案待批准。',
    form: {
      matterTypeLabel: '事项类型',
      matterTypeOptions: ['类型选项占位一', '类型选项占位二', '类型选项占位三'],
      nameLabel: '联系人姓名',
      phoneLabel: '联系电话',
      emailLabel: '电子邮箱',
      contactHint: '电话与邮箱至少填写一项(最终规则待确认)',
      descriptionLabel: '事项说明',
      descriptionPlaceholder: '请简要描述您的事项(占位提示语,最终文案待批准)',
      descriptionMax: 500,
      uploadLabel: '上传材料(可选)',
      uploadHint: '支持 Word、PDF(上传功能于 Phase 5 启用)',
      submitLabel: '提交(占位)',
    },
  },

  placeholders: {
    footerNote: '页脚信息占位(备案号、联系方式等待确认)',
  },
} as const;
