import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Rendering strategy — docs/design/01:
 * 公开、以静态为主的路由使用 prerender;需要请求期数据的路由才用 SSR。
 * 首页为静态营销页 → Prerender(构建期生成 HTML,客户端水合)。
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
