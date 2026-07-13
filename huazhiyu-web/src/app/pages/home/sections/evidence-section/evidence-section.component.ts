import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * 04 专业依据 — 一体化证据面板。
 * 使用经批准的数据文案、可见来源说明和现有的一次性 reveal 指令。
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
