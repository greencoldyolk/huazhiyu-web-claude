import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Level 2 viewport reveal — docs/design/06.
 *
 * 用法:
 *   <section hzyReveal>            单元素 fade-up
 *   <div hzyReveal="stagger-item"> 同级元素按序 stagger(50–80ms)
 *
 * 规则:
 * - 只播一次(进入视口后 disconnect)
 * - SSR 安全:仅在浏览器 afterNextRender 中触碰 DOM/window;
 *   预渲染 HTML 与无 JS 场景内容始终可见
 * - prefers-reduced-motion: reduce 时直接跳过,不隐藏内容
 * - 不要在每个小行上单独使用;以块级内容组为单位
 */
@Directive({
  selector: '[hzyReveal]',
})
export class RevealDirective {
  readonly hzyReveal = input<'' | 'fade-up' | 'stagger-item'>('');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const node = this.host.nativeElement;
      const reduced =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced || typeof IntersectionObserver === 'undefined') {
        return; // 保持静态可见,无 reveal
      }

      if (this.hzyReveal() === 'stagger-item') {
        const parent = node.parentElement;
        const index = parent ? Array.from(parent.children).indexOf(node) : 0;
        node.style.setProperty('--reveal-index', String(Math.max(index, 0)));
      }

      node.classList.add('hzy-reveal');

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('hzy-reveal--in');
              observer.disconnect();
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(node);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
