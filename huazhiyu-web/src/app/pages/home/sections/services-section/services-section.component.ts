import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';

/**
 * 02 核心服务入口 — Phase 2 静态版(docs/design/05)。
 * 桌面 3×2、移动单列。首卡为暖色香槟变体(docs/design/04):
 * 暖色仅体现在香槟底 + 局部小细节,占卡面 ≤ ~20%。
 * hover 抬升等交互态属于 Phase 3,局部辉光属于 Phase 4。
 */
@Component({
  selector: 'hzy-services-section',
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  protected readonly content = SITE_CONTENT.services;
}
