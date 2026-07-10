import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';

/**
 * 03 为什么选择华之喻 — Phase 2 静态版(docs/design/05)。
 * 左侧编辑式导语(桌面 sticky,窄屏禁用)+ 右侧三行列表。
 * 明确不是三卡网格。行 hover 对比变化属于 Phase 3。
 */
@Component({
  selector: 'hzy-advantages-section',
  templateUrl: './advantages-section.component.html',
  styleUrl: './advantages-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvantagesSectionComponent {
  protected readonly content = SITE_CONTENT.advantages;
}
