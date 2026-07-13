import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { BiomedicalVisualComponent } from './biomedical-visual/biomedical-visual.component';
import { ChemicalVisualComponent } from './chemical-visual/chemical-visual.component';
import { ElectricalVisualComponent } from './electrical-visual/electrical-visual.component';
import { MechanicalVisualComponent } from './mechanical-visual/mechanical-visual.component';

/**
 * 05 技术领域与行业经验 — 左白信息区 + 右浅灰独立视觉区。
 * 四个同级技术领域 tab,右区为同族抽象 SVG 组件(机械为母版),
 * 按 field.id 一一对应;切换时旧组件卸载,新组件从自然起点重新循环。
 */
@Component({
  selector: 'hzy-work-section',
  imports: [
    RevealDirective,
    MechanicalVisualComponent,
    ElectricalVisualComponent,
    ChemicalVisualComponent,
    BiomedicalVisualComponent,
  ],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkSectionComponent {
  protected readonly content = SITE_CONTENT.work;

  /** 当前领域 tab(默认「机械 / 高端装备」) */
  protected readonly activeIndex = signal(0);

  /** 切换计数:奇偶交替两个同款动画类,保证每次切换都重放入场动画 */
  protected readonly animTick = signal(0);

  protected select(index: number): void {
    if (index === this.activeIndex()) {
      return;
    }
    this.activeIndex.set(index);
    this.animTick.update((v) => v + 1);
    // 移动端 tabs 可横向滚动:保证当前 tab 始终滚入可见区
    if (typeof document === 'undefined') {
      return;
    }
    const tab = document.getElementById(`field-tab-${index}`);
    if (tab && typeof tab.scrollIntoView === 'function') {
      const reduced =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      tab.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', inline: 'nearest', block: 'nearest' });
    }
  }

  /** 方向键 / Home / End 切换 tab(标准 tabs 键盘交互),焦点跟随 */
  protected onTablistKeydown(event: KeyboardEvent): void {
    const count = this.content.fields.length;
    let next: number;
    switch (event.key) {
      case 'ArrowRight':
        next = (this.activeIndex() + 1) % count;
        break;
      case 'ArrowLeft':
        next = (this.activeIndex() - 1 + count) % count;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = count - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.select(next);
    if (typeof document !== 'undefined') {
      document.getElementById(`field-tab-${next}`)?.focus();
    }
  }
}
