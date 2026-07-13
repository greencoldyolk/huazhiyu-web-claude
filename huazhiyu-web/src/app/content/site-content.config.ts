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
    // 注册全称(来源:现有 logo/logoAlt)。头部只显示三字简称,全称在 footer 展示
    full: '武汉华之喻知识产权代理有限公司',
    enFull: 'Wuhan Huazhiyu Intellectual Property Agency Ltd.',
    slogan: '高端布局 · 全球护航', // 来源:2025 宣传册封面
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
    // 首屏眉行展示注册全称(用户要求 2026-07-13;定位大标题仍为视觉主角)
    eyebrow: '武汉华之喻知识产权代理有限公司',
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
    eyebrow: 'VERIFIED PERFORMANCE',
    heading: '专业依据',
    lead: '用长期、可核验的结果说明专业能力',
    intro: '以公开榜单和持续稳定的授权表现，呈现华之喻的服务质量。',
    metrics: [
      {
        index: '01',
        label: '2024 发明专利授权率百强榜',
        // 主次与宣传册一致:湖北 TOP1 为主打,全国 TOP10 为辅
        primaryValue: '湖北 TOP 1',
        secondaryValue: '全国 TOP 10',
        description: '入选全国代理所发明专利授权率百强榜。',
        metadata: null,
      },
      {
        index: '02',
        label: '高校发明专利',
        primaryValue: '连续 3 年',
        secondaryValue: '授权率超过 90%',
        description: '所代理高校发明专利授权率连续三年超过90%。',
        metadata: null,
      },
      {
        index: '03',
        label: '涉外专利',
        primaryValue: '连续 5 年',
        secondaryValue: '授权率超过 90%',
        description: '涉外专利授权率连续五年超过90%。',
        metadata: '美 / 日 / 欧申请占比 90% · 发明专利占比 95%',
      },
    ],
    // 资质荣誉(来源:2025 宣传册"资质荣誉/Honor",表述按原文;颁发机构全称待业主核对)
    honorsHeading: '资质荣誉',
    honors: [
      { scope: '全国', title: 'A+ 信用等级', issuer: '专利代理师协会' },
      { scope: '湖北省', title: 'AAAAA 级专利代理机构', issuer: null },
      { scope: '湖北省', title: '专利导航服务基地唯一入选代理机构', issuer: null },
      { scope: '武汉', title: '知识产权保护中心专利导航服务机构', issuer: null },
      { scope: '湖北省', title: '专利申请文件质量抽查优秀机构', issuer: null },
    ],
    // 句末"资质荣誉以颁发机构公示为准"为合规性补写,措辞待业主确认
    source: '数据来源：HimmPat，统计口径以原榜单及公司宣传资料为准；资质荣誉以颁发机构公示为准。',
  },

  work: {
    eyebrow: 'INDUSTRY EXPERIENCE',
    heading: '技术领域与行业经验',
    more: '查看更多领域能力',
    // 四个同级技术领域;右侧配图为同族抽象 SVG 组件,按 field.id 一一对应。
    // tab 文案规则:「/」前后各留一个空格,整体单行展示、不得拆开或缩写。
    fields: [
      {
        id: 'mechanical', label: '机械 / 高端装备',
        items: [
          { title: '高端装备', desc: '面向精密机械、成套设备与核心部件提供专利申请与布局支持。' },
          { title: '自动化系统', desc: '覆盖控制系统、生产线方案与智能制造相关技术成果保护。' },
          { title: '结构改进', desc: '围绕机构优化、工艺改良与功能升级进行挖掘和专利培育。' },
          { title: '项目配套', desc: '支持研发项目申报、验收与成果转化过程中的知识产权准备。' },
        ],
      },
      {
        id: 'electrical', label: '电学 / 通信技术',
        items: [
          { title: '电子系统', desc: '覆盖电路设计、模块集成与电子设备相关创新成果保护。' },
          { title: '通信技术', desc: '支持无线通信、信号传输、网络架构与终端技术专利布局。' },
          { title: '控制与算法实现', desc: '面向嵌入式控制、数据处理与软硬件协同方案提供申请支持。' },
          { title: '光电与信息处理', desc: '适配光学检测、传感、图像与信息处理相关技术成果转化。' },
        ],
      },
      {
        id: 'chemical', label: '化学 / 材料工程',
        items: [
          { title: '化学工艺', desc: '面向配方优化、反应工艺与流程改进开展专利挖掘与申请。' },
          { title: '材料开发', desc: '支持高分子、金属、无机及复合材料相关成果保护与布局。' },
          { title: '性能改良', desc: '围绕强度、稳定性、耐久性与功能材料应用进行专利培育。' },
          { title: '工程应用', desc: '服务材料制备、工艺放大与产业化应用过程中的知识产权安排。' },
        ],
      },
      {
        id: 'biomedical', label: '生物医药 / 生命科学',
        items: [
          { title: '生物医药', desc: '支持生物制剂、药物研发与医药相关技术方案的专利保护。' },
          { title: '医疗器械', desc: '面向诊疗设备、检测装置与医工结合成果提供申请支持。' },
          { title: '生命科学研究', desc: '覆盖实验技术、检测方法与科研成果转化过程中的专利布局。' },
          { title: '技术转化配套', desc: '服务高校、科研团队与创新项目在申报、转化环节中的知识产权准备。' },
        ],
      },
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

  // 联系信息(来源:2025 宣传册末页"联系我们")
  contact: {
    orgCode: '42267', // 机构代码(宣传册封面)
    address: '湖北省武汉市东湖高新区佳园路2号高科大厦8058室',
    tel: '027-87003155',
    email: 'hzyip@huazhiyu.cn',
    website: 'www.huazhiyu.cn',
  },

  placeholders: {
    footerNote: '© 武汉华之喻知识产权代理有限公司 · 备案号待补',
  },
} as const;
