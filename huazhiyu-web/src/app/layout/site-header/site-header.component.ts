import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../content/site-content.config';

/**
 * Site header shell — Phase 1.
 *
 * docs/design/03:desktop 72–76px、mobile ≈64px、安静的白底、无重阴影。
 * 滚动态(半透明白 + backdrop blur)属于 Phase 3,此处不实现。
 */
@Component({
  selector: 'hzy-site-header',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  protected readonly content = SITE_CONTENT;
}
