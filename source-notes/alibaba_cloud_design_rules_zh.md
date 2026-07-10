# Alibaba Cloud 中文官网设计语言拆解
## 可复用网页设计规则 v1.0

> 用途：作为后续重新设计网站时的视觉与布局约束。  
> 目标不是复制阿里云的页面，而是学习它如何在内容很多的情况下，仍保持清爽、现代、有重点。

---

## 0. 一句话总结

**清爽不是“元素少”，而是每个版面只有一个明确主角，其余元素都主动降级。**

阿里云页面看起来内容很多，却不拥挤，核心原因不是卡片样式，而是：

1. 每一屏只解决一个问题；
2. 每一区域只有一个视觉焦点；
3. 重点色只用于真正需要强调的局部；
4. 卡片有足够尺寸和呼吸空间；
5. 插画只解释概念，不承担展示细节；
6. 白底、浅色底、深色反转区交替，形成节奏；
7. 不把每项内容都装进同一种“带边框卡片”。

---

# 1. 视觉层级

## 1.1 每个 section 只能有一个主角

每个版面从以下四类主角中选择一个：

- 大标题
- 主视觉
- 一组核心产品/能力卡片
- 一个数据、案例或 CTA

不得同时让标题、插图、卡片、数字和按钮都抢眼。

### MUST

- 每个 section 必须能用一句话回答：“这一屏最希望用户先看到什么？”
- 主角占据该 section 约 50% 以上的视觉注意力。
- 次级内容使用较小字号、浅色、较弱边框或更少细节。
- 一个 section 最多一个主按钮。

### AVOID

- 大标题、复杂 3D 图、六张卡片和四组统计同时出现。
- 所有标题都使用渐变。
- 每个卡片都使用图标、标签、数字、箭头和插图。
- 页面每一屏都做成同等视觉重量。

---

## 1.2 Hero 以文字为主视觉，而不是插图为主视觉

阿里云首页最有效的做法之一，是让标题本身成为画面。

典型结构：

```text
超大黑色标题
其中一个关键词使用蓝紫渐变
一行简短说明
一个主按钮
2–3 个轻量利益点
大面积留白 / 很弱的渐变氛围
```

渐变词在黑字中很醒目，是因为：

- 周围绝大部分文字保持黑色；
- 渐变只占标题中的一小段；
- 背景足够安静；
- 页面没有另一张同样抢眼的大图与它竞争。

### MUST

- H1 只传达一个核心价值。
- H1 最多强调一个词组。
- 渐变文字不超过 H1 总字符的 20%–35%。
- Hero 正文控制在 1–3 行。
- Hero 主按钮最多一个；可有一个低强调次按钮。
- Hero 视觉背景要弱于标题。

### SHOULD

- 首屏使用“文字 + 氛围渐变”优先于“文字 + 巨型插画”。
- 插图存在时，只承担辅助解释，不超过首屏视觉重量的 35%–40%。
- 可用很淡的底部光晕、模糊渐变或几何形状衔接下一屏。

### AVOID

- 每个内页都放一张巨大的 3D 球、专利文档、轨道线。
- 复杂机械图、地球、粒子、文档、盾牌同时出现。
- 标题和插图各自都像广告主视觉。
- 为了“科技感”塞入无意义的网格、光点和悬浮球。

---

# 2. 色彩系统

## 2.1 使用“中性画布 + 主品牌色 + 场景渐变”

页面不是全蓝，也不是每处都有渐变。

建议的颜色角色：

| 角色 | 用途 |
|---|---|
| 黑色 / 深灰 | 大标题、正文主信息 |
| 品牌蓝 | 链接、按钮、当前状态、关键图标 |
| 蓝紫渐变 | AI、创新、重点能力等少数高价值概念 |
| 浅灰蓝 | section 背景、卡片背景、弱分隔 |
| 深蓝 / 黑蓝 | 反色重点区、数据区、CTA |
| 少量辅助色 | 区分模型类别、文件类型或状态 |

## 2.2 渐变必须是稀缺资源

### MUST

- 同一屏最多一个主渐变焦点。
- 同一页面最多 2–3 个强渐变区域。
- 大面积渐变区与纯白区域交替。
- 渐变必须服务语义：AI、创新、全球化、重点产品等。

### AVOID

- 每个按钮都用渐变。
- 每张卡片都用不同渐变背景。
- 蓝紫渐变、橙色按钮、金色图标、青色边框同时出现。
- 用渐变掩盖布局没有重点的问题。

## 2.3 反色区用于改变阅读节奏

深色区不是页脚专用，也不必每页固定出现。

它适合承载：

- 一条最重要的产品主张；
- 数据或可信度；
- 一个重点案例；
- 最终 CTA；
- 与白色内容区明显不同的一类信息。

### Rule

```yaml
dark_section:
  max_per_page: 2
  preferred_height: medium
  text_density: low
  content_focus: 1
  illustration_complexity: low
```

---

# 3. 页面节奏与留白

## 3.1 清爽来自“大组之间远，小组内部近”

不要平均地给所有元素留空。

### 推荐关系

```text
页面 section 之间：很远
section 标题与正文：近
标题组与卡片组：中等
卡片内部相关元素：近
卡片与卡片之间：明确分开
```

### 建议 token（用于后续实现，并非对原站的像素测量）

```yaml
layout:
  max_content_width: 1200-1280px
  desktop_side_padding: 48-72px
  tablet_side_padding: 32px
  mobile_side_padding: 20px

spacing:
  section_y_desktop: 96-128px
  section_y_mobile: 64-80px
  heading_to_body: 16-24px
  intro_to_content: 40-56px
  card_gap_desktop: 24-32px
  card_gap_mobile: 16px
  card_padding: 24-32px
```

## 3.2 一屏不要塞满

阿里云的产品块看起来清爽，是因为它愿意：

- 把内容分成两行；
- 减少每行项目数量；
- 给每项更大的横向宽度；
- 让标题、说明与点击区域完整展开；
- 不强行让所有内容首屏显示完。

### MUST

- 桌面端优先 3–4 列，不默认 6 列。
- 信息稍复杂的卡片必须分两行展示。
- 每张卡片只保留最必要的信息。
- 用户通过滚动获取更多内容，不通过压缩获取更多内容。

### AVOID

- 六张复杂卡片塞在同一行。
- 为了对齐高度加入无意义说明。
- 文字缩到很小以保持“一屏完整”。
- 卡片之间只留 8–12px 的电商式密度。

---

# 4. Grid 与版面结构

## 4.1 使用稳定的大网格，但避免过度对称

建议基于 12-column grid，但成品不必显得像表格。

常见组合：

```yaml
hero:
  text: 5-6 columns
  visual_or_space: 6-7 columns

feature_grid:
  desktop: 3 or 4 columns
  tablet: 2 columns
  mobile: 1 column

editorial_section:
  main: 7-8 columns
  secondary: 4-5 columns
```

## 4.2 页面不要连续出现相同网格

错误节奏：

```text
六卡片
六卡片
三卡片
四卡片
FAQ卡片
```

更好的节奏：

```text
大字 Hero
两行产品入口
一块深色重点区
左右不对称的案例区
简单文字/Logo 可信度区
轻量 CTA
```

### MUST

- 相邻两个 section 不使用完全相同的卡片结构。
- 每个页面至少出现 3 种版面关系：
  - 大字与留白
  - 卡片网格
  - 反色区或左右分栏
- 连续卡片区不得超过两个。

---

# 5. 卡片系统

## 5.1 不是所有内容都需要边框卡片

阿里云的清爽感很大一部分来自“弱容器”。

容器层级可分为：

1. **无容器**：标题 + 文字 + 箭头；
2. **轻容器**：微弱底色，无明显边框；
3. **标准卡片**：浅边框或极轻阴影；
4. **重点卡片**：渐变或反色，但数量很少。

### MUST

- 先判断内容是否真的需要卡片。
- 一组内容中最多一个重点卡片。
- 卡片边框、阴影、背景三者通常只选一个作为边界。
- 点击区域足够大，但视觉边界可以很弱。

### 卡片内容上限

```yaml
card:
  title_lines: 1-2
  body_lines: 2-3
  metadata_items: 0-2
  primary_icon_or_visual: 1
  actions: 1
  decorative_elements: 0-1
```

### AVOID

- 图标 + 编号 + 标签 + 正文 + 多个 bullet + 箭头同时使用。
- 所有卡片都带圆角、阴影和悬浮玻璃效果。
- 每张卡片内部再嵌套多个小卡片。
- 卡片标题和图标过大，导致一屏只能看到标题。

---

# 6. 产品 / 能力入口的两行结构

用户提到的“视频生成大模型等点击 block”值得作为核心模板保留。

## 6.1 推荐结构

每个 block 只包含：

```text
类别或小标签
产品 / 能力名称
一句价值说明
很弱的箭头或 hover 提示
```

不需要同时加入：

- 复杂插图；
- 多个 badge；
- 三行参数；
- 大按钮；
- 装饰数字。

## 6.2 布局规则

```yaml
capability_blocks:
  desktop_columns: 3 or 4
  rows: 2
  minimum_card_height: 180-240px
  gap: 24-32px
  copy_max_lines: 3
  visual_focus: title
  hover:
    translate_y: -2px to -4px
    border_or_bg_shift: subtle
```

## 6.3 为什么两行比一行清爽

- 每张卡片宽度足够，标题不换成三行；
- 卡片之间存在真正的空白；
- 用户可以逐组扫描，不需要一次阅读六七个小块；
- 第二行自然延长页面，让页面更有节奏；
- 更容易通过背景、大小或位置强调其中一项。

---

# 7. Typography

## 7.1 大标题大胆，正文克制

推荐层级：

```yaml
type:
  hero_h1_desktop: 56-72px
  hero_h1_mobile: 38-48px
  section_h2_desktop: 36-48px
  section_h2_mobile: 28-34px
  card_title: 20-24px
  body: 16-18px
  small: 13-14px
  body_line_height: 1.6-1.8
```

这些是后续实现建议，不是对阿里云官方 CSS 的复制。

### MUST

- H1 使用高对比黑色或极深色。
- 正文使用中灰，不与标题同重。
- 小标签使用字号与颜色降级，不使用粗体抢注意力。
- 一屏中粗体字的总量要有限。

### AVOID

- 所有标题都使用深蓝衬线字体。
- 每个卡片标题都粗黑且居中。
- 为了“高端”让文字普遍过细。
- 小号中文堆得很密。

---

# 8. 插图与图像规则

## 8.1 复杂度的正确中间值

目标不是“越简单越好”，而是：

> **轮廓简单，层次丰富；对象少，材质和颜色有变化。**

一张合格的科技插图可以包含：

- 1 个主对象；
- 2–4 个辅助几何层；
- 1 组细线或粒子关系；
- 同色系的明暗层次；
- 一个小面积反色或亮色焦点。

不应包含：

- 5 个以上现实对象；
- 机械、地球、文档、天平、DNA、盾牌同时出现；
- 大量细碎文字；
- 复杂写实光影；
- 不可解释的粒子与轨道。

## 8.2 插图应像设计资产，不像生成场景

### MUST

- 使用可拆分的 SVG / CSS / Lottie 思路设计。
- 元素轮廓清晰，便于响应式重排。
- 每张主视觉只表达一个概念。
- 颜色以同一色系层次为主。
- 小面积使用互补色制造焦点。

### SHOULD

- 用抽象的卡片、层、节点、路径表达服务关系。
- 用形状和结构表达“分析、连接、保护、全球化”。
- 真实图片只用于案例或团队，且摄影风格必须统一。
- 小插图尽量可用简单矢量重画，不依赖 AI 生成。

### AVOID

- 每个 hero 都使用一张新的 AI 3D 图。
- 蓝色发光球成为全站通用图标。
- 重复使用机器人手臂、DNA、卫星、地球。
- 图片承担大量文字内容。
- 画面中有看不懂的伪文字和机械结构。

---

# 9. 动效规则

阿里云式动效的作用通常是：

- 让页面有生命；
- 提示可点击；
- 强化层级；
- 帮助内容切换。

不是为了展示动画技术。

## 9.1 可实施的轻动效

```yaml
motion:
  hover_duration: 160-240ms
  section_reveal: 300-500ms
  hover_translate: 2-4px
  scale_change: 1.00-1.02
  gradient_shift: very_subtle
  stagger_delay: 40-80ms
```

可使用：

- 卡片 hover 轻微上移；
- 箭头向右移动 2–4px；
- 边框或背景色轻微变化；
- 进入 viewport 后淡入 + 轻微上移；
- 渐变背景非常慢地漂移；
- 图标中的单一部件轻微浮动；
- tabs 切换时内容淡入。

## 9.2 不应使用

- 大面积持续旋转；
- 所有卡片都漂浮；
- 发光呼吸边框；
- 复杂的滚动视差；
- 大量粒子永远运动；
- 页面加载时长动画；
- 用户无法关闭的自动轮播。

## 9.3 无障碍规则

```css
@media (prefers-reduced-motion: reduce) {
  /* 禁用非必要位移、循环和视差 */
}
```

---

# 10. 内容密度规则

## 10.1 每张卡片只回答一个问题

例如：

- 这是什么？
- 它适合谁？
- 它解决什么问题？
- 为什么值得点击？

不要一张卡片全部回答。

## 10.2 推荐文案长度

```yaml
copy_limits:
  hero_heading: 10-22 Chinese characters
  hero_body: 35-70 Chinese characters
  section_intro: 35-80 Chinese characters
  card_title: 6-16 Chinese characters
  card_body: 25-55 Chinese characters
  chip: 2-7 Chinese characters
```

## 10.3 页面级内容分组

每一组先有一个概括，再有入口，不要让卡片代替全部说明。

```text
Section 标题
一句解释
足够间距
卡片 / 内容
```

---

# 11. 导航与页脚

## 11.1 顶部导航

### MUST

- 导航背景安静，不与 hero 抢焦点。
- 一级入口控制在 6–8 个。
- 当前状态使用一条线、颜色或字重即可。
- 右侧最多一个主 CTA。

### AVOID

- 菜单之间加入明显分隔线。
- CTA 使用过大的胶囊。
- 每个菜单都有图标。
- Header 使用厚重阴影。

## 11.2 页脚

页脚可以信息多，但不能像另一张首页。

### Rule

- 使用深色建立明确结束感；
- 信息按 3–5 组排列；
- QR code 不是必须；
- 不放大量重复导航；
- 联系信息简洁、可复制、可点击；
- 法律与备案信息放在最底层。

---

# 12. 页面背景节奏

推荐的整页节奏：

```text
1. 白色 / 极浅背景 Hero
2. 白色或浅灰的产品入口
3. 深色或强渐变重点区
4. 白色内容区
5. 浅色案例 / 解决方案区
6. 白色可信度 / 资源区
7. 强 CTA
8. 深色 Footer
```

### 原则

- 不要让两个深色区直接相邻。
- 不要让三个白底卡片区连续出现。
- 每隔 1–2 个 section 改变一次背景关系。
- 改背景是为了改变阅读模式，不是装饰。

---

# 13. 我们上一版设计为什么显得土

以下问题必须在后续方案中显式禁止：

```yaml
anti_patterns:
  - 所有页面使用同一套“左标题 + 右 3D 图”
  - 每个 hero 都出现蓝色发光球、文档和轨道线
  - 所有 section 都是白色圆角卡片网格
  - 一行塞入六张复杂服务卡
  - 图标、标签、数字、说明、箭头同时堆在卡片里
  - 深蓝统计条在每个页面重复
  - 大量假数据制造“权威感”
  - 案例图片使用明显的 AI 科技素材
  - 机器人、DNA、光纤、法槌等陈词滥调
  - 页面各区域视觉重量完全相同
  - 蓝白金配色过度法务化、模板化
  - 插图比真实内容更抢眼
  - 为了显得丰富而牺牲留白
```

---

# 14. 可直接交给设计 / 编码 Agent 的规则

```yaml
design_system:
  name: clean_cloud_editorial
  intent:
    - modern
    - calm
    - credible
    - spacious
    - technology_literate
    - not_generic_ai

  hierarchy:
    one_primary_focus_per_section: true
    max_primary_cta_per_section: 1
    max_gradient_focus_per_viewport: 1
    illustration_must_be_secondary_to_copy: true

  layout:
    content_max_width: 1240px
    desktop_columns: 12
    preferred_card_columns: [3, 4]
    never_squeeze_complex_cards_into_6_columns: true
    section_vertical_spacing: generous
    alternate_section_structures: true

  typography:
    hero_title_is_visual_anchor: true
    gradient_text_max_ratio: 0.35
    body_copy_max_lines_in_hero: 3
    use_high_contrast_headings: true
    use_muted_body_text: true

  colors:
    neutral_background_is_default: true
    brand_blue_is_functional: true
    gradients_are_semantic_and_rare: true
    dark_inverted_sections_max: 2
    secondary_colors_are_small_accents: true

  cards:
    use_container_only_when_needed: true
    content_items_max: 5
    actions_max: 1
    tags_max: 2
    nested_cards: false
    heavy_shadow: false

  illustrations:
    main_objects_max: 1
    supporting_shapes_max: 4
    use_vector_like_geometry: true
    use_same_hue_layering: true
    avoid_generated_scene_complexity: true
    avoid_fake_text_inside_images: true
    avoid_repeating_global_orb_motif: true

  motion:
    subtle_only: true
    hover_translation_max: 4px
    no_continuous_large_motion: true
    respect_reduced_motion: true

  content:
    one_question_per_card: true
    card_body_max_lines: 3
    section_intro_max_lines: 2
    scrolling_is_preferred_over_compression: true

  quality_gate:
    - Can the primary focus of every section be named immediately?
    - Does each section differ structurally from the previous one?
    - Is any gradient being used without semantic reason?
    - Can one decorative element be removed without losing meaning?
    - Are cards wide enough to read without tiny text?
    - Does the illustration still work if redrawn as simple SVG?
    - Does the page remain coherent with all animation disabled?
```

---

# 15. 后续重新设计时的工作顺序

暂时不要先画完整网页。

正确顺序：

1. **确定页面要讲的 5–7 个核心内容块**
2. **为每个 section 指定唯一主角**
3. **安排白 / 浅色 / 深色 section 节奏**
4. **决定哪些内容不使用卡片**
5. **先做纯黑白 wireframe**
6. **验证密度、留白和信息顺序**
7. **再加入品牌色和一个重点渐变**
8. **最后设计可实现的 SVG / CSS 插图**
9. **只在交互提示需要时加入微动效**
10. **最后检查是否出现模板化、AI 化和重复视觉**

---

# 16. 验收清单

## 页面整体

- [ ] 第一眼能看出当前页面唯一核心信息
- [ ] 没有连续三个卡片网格区
- [ ] 页面存在明显的疏密变化
- [ ] 强色区域数量有限
- [ ] 不依赖复杂大图才能成立
- [ ] 内容即使全部换成灰度也有清晰层级

## Hero

- [ ] 标题足够强，插图只是辅助
- [ ] 渐变只强调一个短语
- [ ] 正文不超过三行
- [ ] 主 CTA 只有一个
- [ ] 首屏留白足够

## 卡片

- [ ] 复杂卡片不超过 3–4 列
- [ ] 卡片说明不超过三行
- [ ] 没有多余标签
- [ ] 不是所有内容都有边框
- [ ] hover 不依赖夸张动画

## 插图

- [ ] 只有一个主对象
- [ ] 没有 AI 伪文字
- [ ] 没有无意义复杂机械结构
- [ ] 可以被 SVG / CSS / Lottie 实现
- [ ] 不重复使用发光球、地球和轨道线

## 动效

- [ ] 动效用于层级或反馈
- [ ] 没有持续吸引注意力的循环
- [ ] 支持 reduced motion
- [ ] 静态状态本身已完整、美观

---

## 最终原则

> **先用排版和空间建立高级感，再用色彩建立重点，最后才用插图和动效增加记忆点。**

> **不是把每一块都设计得“很完整”，而是允许次要内容保持安静，让真正重要的内容被看见。**
