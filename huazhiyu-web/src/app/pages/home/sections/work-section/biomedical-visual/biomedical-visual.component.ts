import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * 胶囊轮廓:直段恒 ±80,仅端部半径 r 随层收缩(鼓面的关键——
 * r 沿四分之一圆弧 60→34.8 收小,inset = 27·(1−cos(t·π/2)), t=z/42)。
 */
const capsulePath = (r: number): string =>
  `M -80 ${-r} L 80 ${-r} A ${r} ${r} 0 0 1 80 ${r} L -80 ${r} A ${r} ${r} 0 0 1 -80 ${-r} Z`;

/**
 * 生物医药 / 生命科学抽象视觉(Section 05 右区,四领域同族组件之四)。
 *
 * 3D 等距"鼓面胶囊"(280×120)—— 与齿轮/晶格片同一台相机
 * (rotate(-20deg) rotateX(38deg))、同一套层叠技法,24 层轮廓逐层收缩
 * 叠出饱满枕形曲面(像真实药丸):冠面(z42,r33)带长轴光泽条 + 端部高光点
 * + 右半淡染"两段式" + 中缝蚀刻线 + 接缝右侧套壳暗带;
 * 金色 = 冠面内嵌 stadium 环(r20,封装的活性成分语义)+ 金点沿环巡行
 * (offset-path,20s,在旋转坐标系内);整颗 28s 慢转;长圆投影随转。
 * 族不变量:白瓷色带 / 金一线一点 / 虚线参考环 / 7s 浮动 / reduced-motion 全关。
 *
 * ⚠ 工程注意(族内结论):CSS transform 动画不可加在 3D 上下文内的 SVG <g> 上
 * (Chromium 合成层在 preserve-3d 排序中丢失);金点在独立升降层内由
 * offset-path 驱动(offset 动画不改写 transform,实测安全)。
 */
@Component({
  selector: 'hzy-biomedical-visual',
  templateUrl: './biomedical-visual.component.html',
  styleUrl: './biomedical-visual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiomedicalVisualComponent {
  /** 冠面轮廓(r33)与右半淡染 */
  readonly crownPath = capsulePath(33);
  readonly crownTintPath = 'M 2 -33 L 80 -33 A 33 33 0 0 1 80 33 L 2 33 Z';

  /** 金色内嵌环(r20;金点巡行路径与其一致,见 scss offset-path) */
  readonly goldRingPath = capsulePath(20);

  /** 囊体 24 层:z 步进 1.75px,端部半径沿圆弧收缩,底暗顶亮 */
  readonly capsuleLayers = [
    { z: 0, fill: '#aeb9cc', d: capsulePath(60) },
    { z: 1.75, fill: '#b0bbce', d: capsulePath(59.9) },
    { z: 3.5, fill: '#b3bdcf', d: capsulePath(59.8) },
    { z: 5.25, fill: '#b5bfd1', d: capsulePath(59.5) },
    { z: 7, fill: '#b8c2d2', d: capsulePath(59.1) },
    { z: 8.75, fill: '#bac4d4', d: capsulePath(58.6) },
    { z: 10.5, fill: '#bdc6d6', d: capsulePath(57.9) },
    { z: 12.25, fill: '#bfc8d7', d: capsulePath(57.2) },
    { z: 14, fill: '#c1cad9', d: capsulePath(56.4) },
    { z: 15.75, fill: '#c4ccda', d: capsulePath(55.4) },
    { z: 17.5, fill: '#c6cedc', d: capsulePath(54.4) },
    { z: 19.25, fill: '#c9d0de', d: capsulePath(53.3) },
    { z: 21, fill: '#cbd3df', d: capsulePath(52.1) },
    { z: 22.75, fill: '#ced5e1', d: capsulePath(50.8) },
    { z: 24.5, fill: '#d0d7e3', d: capsulePath(49.4) },
    { z: 26.25, fill: '#d3d9e4', d: capsulePath(48) },
    { z: 28, fill: '#d5dbe6', d: capsulePath(46.5) },
    { z: 29.75, fill: '#d7dde7', d: capsulePath(44.9) },
    { z: 31.5, fill: '#dadfe9', d: capsulePath(43.3) },
    { z: 33.25, fill: '#dce1eb', d: capsulePath(41.7) },
    { z: 35, fill: '#dfe4ec', d: capsulePath(40) },
    { z: 36.75, fill: '#e1e6ee', d: capsulePath(38.3) },
    { z: 38.5, fill: '#e4e8ef', d: capsulePath(36.5) },
    { z: 40.25, fill: '#e6eaf1', d: capsulePath(34.8) },
  ];
}
