import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AdvantagesSectionComponent } from './sections/advantages-section/advantages-section.component';
import { EvidenceSectionComponent } from './sections/evidence-section/evidence-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { InquirySectionComponent } from './sections/inquiry-section/inquiry-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { WorkSectionComponent } from './sections/work-section/work-section.component';

/**
 * Home page — Phase 2.
 * 固定六段信息架构(docs/design/00/05),顺序不可调整:
 * Hero → 核心服务 → 为什么选择华之喻 → 专业依据 → 代表性工作 → 提交新事项。
 */
@Component({
  selector: 'hzy-home',
  imports: [
    HeroSectionComponent,
    ServicesSectionComponent,
    AdvantagesSectionComponent,
    EvidenceSectionComponent,
    WorkSectionComponent,
    InquirySectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
