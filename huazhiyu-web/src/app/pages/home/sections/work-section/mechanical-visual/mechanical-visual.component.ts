import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * 机械 / 高端装备抽象视觉(Section 05 右区,四领域同族组件之一/母版)。
 *
 * 3D 等距齿轮 —— 纯 SVG + CSS 3D 嵌套旋转:
 * 外层 .iso-plane 定姿态(rotate(-20deg) rotateX(38deg) + preserve-3d),
 * 内层 .gear-spin 只做 2D rotate,投影后等价于绕自身轴的真 3D 旋转;
 * 厚度由 16 层 translateZ(步进 1.5px)复制叠出,轮毂再抬高至 26→38px。
 * 齿面金环(r98,--amber-line)+ 金点独立巡行;虚线参考环带轻微独立倾角。
 * 动效沿用组件族规范:齿轮 28s 顺时针、金点 20s、整体 7s 浮动;
 * 纯装饰(aria-hidden)、无依赖、reduced-motion 全关、静态成立。
 *
 * 齿轮几何(生成参数,如需改齿形可按此重算 path):
 * 16 齿,齿顶 R132 / 齿根 R105,齿顶宽 0.30 / 齿根宽 0.46(占节距比)。
 * 效果对比与背景版本讨论见 docs/fields-bg-versions.html。
 */
@Component({
  selector: 'hzy-mechanical-visual',
  templateUrl: './mechanical-visual.component.html',
  styleUrl: './mechanical-visual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MechanicalVisualComponent {
  /** 16 齿齿轮轮廓(viewBox -170 -170 340 340,圆心 0,0) */
  readonly gearPath =
    'M104.6 -9.5L131.8 -7.8L131.8 7.8L104.6 9.5L103.0 20.5L100.2 31.3L124.7 43.2L118.8 57.6' +
    'L93.0 48.8L87.3 58.3L80.6 67.2L98.7 87.7L87.7 98.7L67.2 80.6L58.3 87.3L48.8 93.0' +
    'L57.6 118.8L43.2 124.7L31.3 100.2L20.5 103.0L9.5 104.6L7.8 131.8L-7.8 131.8L-9.5 104.6' +
    'L-20.5 103.0L-31.3 100.2L-43.2 124.7L-57.6 118.8L-48.8 93.0L-58.3 87.3L-67.2 80.6' +
    'L-87.7 98.7L-98.7 87.7L-80.6 67.2L-87.3 58.3L-93.0 48.8L-118.8 57.6L-124.7 43.2' +
    'L-100.2 31.3L-103.0 20.5L-104.6 9.5L-131.8 7.8L-131.8 -7.8L-104.6 -9.5L-103.0 -20.5' +
    'L-100.2 -31.3L-124.7 -43.2L-118.8 -57.6L-93.0 -48.8L-87.3 -58.3L-80.6 -67.2L-98.7 -87.7' +
    'L-87.7 -98.7L-67.2 -80.6L-58.3 -87.3L-48.8 -93.0L-57.6 -118.8L-43.2 -124.7L-31.3 -100.2' +
    'L-20.5 -103.0L-9.5 -104.6L-7.8 -131.8L7.8 -131.8L9.5 -104.6L20.5 -103.0L31.3 -100.2' +
    'L43.2 -124.7L57.6 -118.8L48.8 -93.0L58.3 -87.3L67.2 -80.6L87.7 -98.7L98.7 -87.7' +
    'L80.6 -67.2L87.3 -58.3L93.0 -48.8L118.8 -57.6L124.7 -43.2L100.2 -31.3L103.0 -20.5Z';

  /** 轮体 16 层:z 步进 1.5px,底暗顶亮(冷调环境光遮蔽) */
  readonly bodyLayers = [
    { z: 0, fill: '#aeb9cc' },
    { z: 1.5, fill: '#b2bcce' },
    { z: 3, fill: '#b5c0d1' },
    { z: 4.5, fill: '#b9c3d3' },
    { z: 6, fill: '#bdc6d6' },
    { z: 7.5, fill: '#c1c9d8' },
    { z: 9, fill: '#c4cddb' },
    { z: 10.5, fill: '#c8d0dd' },
    { z: 12, fill: '#ccd3e0' },
    { z: 13.5, fill: '#d0d6e2' },
    { z: 15, fill: '#d3dae5' },
    { z: 16.5, fill: '#d7dde7' },
    { z: 18, fill: '#dbe0ea' },
    { z: 19.5, fill: '#dfe3ec' },
    { z: 21, fill: '#e2e7ef' },
    { z: 22.5, fill: '#e6eaf1' },
  ];

  /** 轮毂 6 层:叠在齿面(z24)之上,26→36px */
  readonly hubLayers = [
    { z: 26, fill: '#c6cfdf' },
    { z: 28, fill: '#ced6e4' },
    { z: 30, fill: '#d6dce8' },
    { z: 32, fill: '#dde3ed' },
    { z: 34, fill: '#e5e9f1' },
    { z: 36, fill: '#edf0f6' },
  ];
}
