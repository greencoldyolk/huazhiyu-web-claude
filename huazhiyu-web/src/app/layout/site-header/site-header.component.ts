import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

import { SITE_CONTENT } from '../../content/site-content.config';

/**
 * Site header — Phase 3。
 *
 * docs/design/03:默认安静(近透明白、无重阴影);滚动后 88–92% 不透明白
 * + backdrop blur(18px) saturate(140%) + 一条细分隔线,尺寸不跳动。
 * 滚动监听为 passive,且仅在浏览器端注册(SSR 安全)。
 */
@Component({
  selector: 'hzy-site-header',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  protected readonly content = SITE_CONTENT;
  protected readonly scrolled = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const onScroll = () => this.scrolled.set(window.scrollY > 8);
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
      onScroll();
    });
  }
}
