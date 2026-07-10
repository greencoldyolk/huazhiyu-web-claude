import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../content/site-content.config';

/**
 * Site footer shell — Phase 1.
 * docs/design/03 背景节奏:footer 为深色段。内容占位,待最终信息确认。
 */
@Component({
  selector: 'hzy-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly content = SITE_CONTENT;
}
