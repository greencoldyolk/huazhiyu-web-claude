import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * 04 专业依据 — Phase 2 静态版(docs/design/05)。
 * 全宽深色墨蓝段 + 三列事实。事实值一律占位文字,
 * 不发明数据。噪点/网格材质与弧线属于 Phase 4,
 * 一次性 stagger reveal 属于 Phase 3。
 */
@Component({
  selector: 'hzy-evidence-section',
  imports: [RevealDirective],
  templateUrl: './evidence-section.component.html',
  styleUrl: './evidence-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvidenceSectionComponent {
  protected readonly content = SITE_CONTENT.evidence;
}
