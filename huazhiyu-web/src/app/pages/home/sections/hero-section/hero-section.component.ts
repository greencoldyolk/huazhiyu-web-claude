import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
} from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * 01 Hero — Phase 4 签名视觉(docs/design/05/06)。
 * 分层信息平面 + 细路径 + 一个琥珀端点节点 + 一处琥珀基底微光。
 * 指针视差:4–8px 协调深度位移;仅精确指针设备;Hero 离屏即停止;
 * prefers-reduced-motion 时完全关闭;passive 监听 + rAF 节流。
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

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const canMatch = typeof window.matchMedia === 'function';
      const reduced = canMatch && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const finePointer = canMatch && window.matchMedia('(pointer: fine)').matches;
      if (reduced || !finePointer || typeof IntersectionObserver === 'undefined') {
        return; // 静态呈现;移动端与 reduced-motion 无视差
      }

      const section = this.host.nativeElement.querySelector<HTMLElement>('.hero');
      const visual = this.host.nativeElement.querySelector<HTMLElement>('.hero__visual');
      if (!section || !visual) {
        return;
      }

      let active = false;
      let rafId = 0;

      const reset = () => {
        visual.style.setProperty('--px', '0');
        visual.style.setProperty('--py', '0');
      };

      // Hero 离开视口即停止指针工作(doc 06 performance)
      const observer = new IntersectionObserver(([entry]) => {
        active = entry.isIntersecting;
        if (!active) {
          reset();
        }
      });
      observer.observe(section);

      const onPointerMove = (event: PointerEvent) => {
        if (!active || rafId) {
          return;
        }
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          const rect = section.getBoundingClientRect();
          const dx = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
          const dy = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
          visual.style.setProperty('--px', dx.toFixed(3));
          visual.style.setProperty('--py', dy.toFixed(3));
        });
      };

      section.addEventListener('pointermove', onPointerMove, { passive: true });
      section.addEventListener('pointerleave', reset, { passive: true });

      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        section.removeEventListener('pointermove', onPointerMove);
        section.removeEventListener('pointerleave', reset);
      });
    });
  }
}
