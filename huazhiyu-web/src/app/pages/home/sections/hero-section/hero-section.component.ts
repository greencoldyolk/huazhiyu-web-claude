import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * 01 Hero — approved artwork。
 * 交互只保留 hover 时一次缓慢的轻微放大(zoom-in),无指针跟随位移
 * (业主反馈四向晃动感差,已移除);reduced-motion 下无动画。
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
