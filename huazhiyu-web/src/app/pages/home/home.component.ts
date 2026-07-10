import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE_CONTENT } from '../../content/site-content.config';

/**
 * Home page skeleton — Phase 1.
 *
 * 六个 section(Hero / 服务 / 优势 / 依据 / 代表工作 / 提交新事项)
 * 属于 Phase 2,本阶段只保留页面骨架与语义 h1 占位。
 */
@Component({
  selector: 'hzy-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly content = SITE_CONTENT;
}
