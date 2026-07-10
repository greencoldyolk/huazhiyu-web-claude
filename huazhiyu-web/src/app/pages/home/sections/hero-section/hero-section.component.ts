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
 * 01 Hero — approved artwork with a feathered edge and restrained pointer response.
 * Browser-only pointer work is attached after render and stays disabled for touch,
 * narrow screens, and reduced-motion preferences.
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
      const visual = this.host.nativeElement.querySelector<HTMLElement>('.hero__visual');
      if (!visual || typeof window.matchMedia !== 'function') {
        return;
      }

      const pointerQuery = window.matchMedia(
        '(hover: hover) and (pointer: fine) and (not (any-pointer: coarse)) and ' +
          '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      );
      let frameId = 0;
      let bounds: DOMRect | null = null;
      let pointerX = 0;
      let pointerY = 0;

      const applyPointerPosition = () => {
        frameId = 0;
        visual.style.setProperty('--hx', `${(pointerX * 6).toFixed(2)}px`);
        visual.style.setProperty('--hy', `${(pointerY * 4).toFixed(2)}px`);
        visual.style.setProperty('--gx', `${(pointerX * 12).toFixed(2)}px`);
        visual.style.setProperty('--gy', `${(pointerY * 8).toFixed(2)}px`);
      };

      const resetPointerPosition = () => {
        if (frameId) {
          cancelAnimationFrame(frameId);
          frameId = 0;
        }
        bounds = null;
        pointerX = 0;
        pointerY = 0;
        visual.style.setProperty('--hx', '0px');
        visual.style.setProperty('--hy', '0px');
        visual.style.setProperty('--gx', '0px');
        visual.style.setProperty('--gy', '0px');
      };

      const onPointerEnter = (event: PointerEvent) => {
        if (pointerQuery.matches && event.pointerType === 'mouse') {
          bounds = visual.getBoundingClientRect();
        }
      };

      const onPointerMove = (event: PointerEvent) => {
        if (!pointerQuery.matches || event.pointerType !== 'mouse') {
          return;
        }

        bounds ??= visual.getBoundingClientRect();
        pointerX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
        pointerY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));

        if (!frameId) {
          frameId = requestAnimationFrame(applyPointerPosition);
        }
      };

      visual.addEventListener('pointerenter', onPointerEnter, { passive: true });
      visual.addEventListener('pointermove', onPointerMove, { passive: true });
      visual.addEventListener('pointerleave', resetPointerPosition, { passive: true });
      pointerQuery.addEventListener('change', resetPointerPosition);

      this.destroyRef.onDestroy(() => {
        resetPointerPosition();
        visual.removeEventListener('pointerenter', onPointerEnter);
        visual.removeEventListener('pointermove', onPointerMove);
        visual.removeEventListener('pointerleave', resetPointerPosition);
        pointerQuery.removeEventListener('change', resetPointerPosition);
      });
    });
  }
}
