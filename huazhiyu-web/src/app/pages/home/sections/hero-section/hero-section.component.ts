import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * 01 Hero — Phase 2 静态版(docs/design/05)。
 * 右侧分层视觉为静态占位平面;真正的分层视觉、指针视差
 * 与琥珀节点属于 Phase 4。Reveal 动效属于 Phase 3。
 */
@Component({
  selector: 'hzy-hero-section',
  imports: [RevealDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly content = SITE_CONTENT.hero;
}
