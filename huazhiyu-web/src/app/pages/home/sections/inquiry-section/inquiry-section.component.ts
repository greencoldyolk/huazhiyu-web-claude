import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';

/**
 * 06 提交新事项 — Phase 2 静态版(docs/design/05/08)。
 * 首页核心转化功能,多行表单而非聊天机器人。
 * 本阶段仅静态结构:Typed Reactive Forms、校验、计数联动、
 * 直传 OSS 与提交逻辑属于 Phase 3/5;琥珀角部辉光属于 Phase 4。
 */
@Component({
  selector: 'hzy-inquiry-section',
  templateUrl: './inquiry-section.component.html',
  styleUrl: './inquiry-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InquirySectionComponent {
  protected readonly content = SITE_CONTENT.inquiry;
}
