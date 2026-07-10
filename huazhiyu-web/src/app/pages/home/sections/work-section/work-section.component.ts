import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * 05 代表性工作 — Phase 2 静态版(docs/design/05)。
 * 8 列主推面板 + 4 列次要列表的不对称布局,一条纵向时间线。
 * 时间线圆点 Phase 2 用蓝紫中性色,琥珀色属于 Phase 4 的
 * 琥珀 accents 任务;面板局部材质与 hover 同理后置。
 */
@Component({
  selector: 'hzy-work-section',
  imports: [RevealDirective],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkSectionComponent {
  protected readonly content = SITE_CONTENT.work;
}
