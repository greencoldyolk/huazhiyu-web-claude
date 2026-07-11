/**
 * Site content placeholders — Phase 2.
 *
 * 依据 AGENTS.md:不得发明文案、数据、人名、案例名。
 * 本文件只存放「明确标注为占位」的字符串,最终文案批准后在此集中替换。
 * (对应 docs/design/01 建议结构中的 core/config 职责。)
 *
 * 非占位内容:六个 section 的信息架构名称、已批准的 Hero 文案,
 * 与「专利申请」特殊卡占位名(docs/design/04 明确指定)。
 */
export const SITE_CONTENT = {
  siteName: {
    zh: '华之喻', // 来源:现有 logo,最终 SVG logo 资产待提供(docs/design/10 第 12 条)
    en: 'Huazhiyu',
  },
  // 现有 logo 上的全称(来源:assets/reference/current-logo.png)
  logoAlt: '武汉华之喻知识产权代理有限公司 Wuhan Huazhiyu Intellectual Property Agency Ltd.',

  // 主导航(项目名取自业主认可的 mock);pending 项等对应页面上线后激活
  nav: {
    items: [
      { label: '首页', href: '/', pending: false },
      { label: '服务', href: '#services', pending: false },
      { label: '案例', href: '#work', pending: false },
      { label: '团队', href: '', pending: true },
      { label: '关于我们', href: '', pending: true },
      { label: '合作', href: '', pending: true },
    ],
    cta: '提交新事项',
  },

  hero: {
    eyebrow: '华之喻知识产权',
    titlePre: '专业的 ',
    titleAccent: '知识产权服务',
    titlePost: '，',
    titleLine2: '覆盖从申请到布局的关键环节',
    lead: [
      { text: '围绕', emphasis: false },
      { text: '专利申请', emphasis: true },
      { text: '、检索分析、审查答复与', emphasis: false },
      { text: '专利布局', emphasis: true },
      { text: '，为企业、高校及科研团队提供专业、务实的知识产权支持。', emphasis: false },
    ],
    primaryCta: '提交新事项',
    secondaryLink: '查看服务范围',
    // 三个要点,文字取自业主认可的 mock,最终文案仍待批准
    points: [
      { label: '专业团队', desc: '技术与法律双重理解' },
      { label: '高效赋能', desc: '快速响应,省心托付' },
      { label: '务实透明', desc: '清晰流程,合理收费' },
    ],
  },

  services: {
    heading: '核心服务',
    intro: '根据实际需求，快速进入对应服务。',
    // 定稿服务文案(业主提供);首卡为唯一暖色重点卡
    items: [
      { icon: 'domestic', title: '国内专利申请', desc: '发明、实用新型及外观设计申请，并提供审查意见答复支持。', warm: true },
      { icon: 'foreign', title: '涉外专利申请', desc: '办理 PCT 及主要国家和地区的专利申请与流程协调。', warm: false },
      { icon: 'search', title: '专利检索与分析', desc: '提供可专利性检索、技术情报、专利导航及风险分析。', warm: false },
      { icon: 'layout', title: '专利挖掘与布局', desc: '围绕产品与科研项目挖掘创新点，构建系统化专利组合。', warm: false },
      { icon: 'dispute', title: '复审、无效与侵权', desc: '处理驳回复审、专利无效、侵权分析及相关争议事务。', warm: false },
      { icon: 'trademark', title: '商标与版权事务', desc: '涵盖商标注册与维护、版权及软件著作权登记等服务。', warm: false },
    ],
  },

  advantages: {
    eyebrow: 'WHY HUAZHIYU',
    heading: '为什么选择华之喻',
    leadPre: '从技术理解，',
    leadAccent: '到权利落地',
    intro: '好的知识产权服务，不只是按流程递交材料。',
    items: [
      {
        index: '01',
        title: '懂技术，才能写清保护边界',
        desc: '覆盖多学科技术领域，准确提炼创新点与保护重点。',
      },
      {
        index: '02',
        title: '专业人员，直接参与关键环节',
        desc: '由具备审查、代理或研发背景的专业人员直接参与。',
      },
      {
        index: '03',
        title: '围绕项目目标，而非止于材料递交',
        desc: '结合实际需求，兼顾授权、布局与后续风险。',
      },
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
