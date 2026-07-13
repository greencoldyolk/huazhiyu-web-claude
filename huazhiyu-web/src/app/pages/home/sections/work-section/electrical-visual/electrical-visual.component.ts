import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * 电学 / 通信技术抽象视觉(Section 05 右区,四领域同族组件之二)。
 *
 * 3D 等距"芯片基板" —— 与机械齿轮同一套纯 SVG + CSS 3D 层叠技术:
 * 方形圆角基板 16 层堆叠(白瓷质感),顶面蚀刻走线/焊盘/过孔/通信弧;
 * 金色 = 圆角方形"密封环"(真实芯片的 seal ring 语义)+ 金点沿环巡行
 * (CSS offset-path,20s);中心凸起圆形"编码盘"(旋转编码器语义)28s 慢转,
 * 承担族语法中的主体旋转;左上裸片 + 右侧元件为静止凸起。
 * 族不变量:虚线参考环 / 投影 / 7s 浮动 / reduced-motion 全关 / aria-hidden。
 *
 * 基板几何:240×240 圆角 24;密封环 184×184 圆角 16(对应齿轮金环 r98 的比例)。
 * 设计推演与四领域体系(圆/方/六边/螺旋)见 docs/fields-bg-versions.html 及项目记忆。
 */
@Component({
  selector: 'hzy-electrical-visual',
  templateUrl: './electrical-visual.component.html',
  styleUrl: './electrical-visual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricalVisualComponent {
  /** 圆角方形基板轮廓(viewBox -170 -170 340 340,圆心 0,0) */
  readonly platePath =
    'M -96 -120 L 96 -120 Q 120 -120 120 -96 L 120 96 Q 120 120 96 120 ' +
    'L -96 120 Q -120 120 -120 96 L -120 -96 Q -120 -120 -96 -120 Z';

  /** 基板 16 层:z 步进 1.5px,底暗顶亮(与齿轮同一冷调色带) */
  readonly plateLayers = [
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

  /** 中心编码盘 6 层(r40):26→36px,顶面(z38)在模板中单独旋转 */
  readonly encoderLayers = [
    { z: 26, fill: '#c6cfdf' },
    { z: 28, fill: '#ced6e4' },
    { z: 30, fill: '#d6dce8' },
    { z: 32, fill: '#dde3ed' },
    { z: 34, fill: '#e5e9f1' },
    { z: 36, fill: '#edf0f6' },
  ];

  /** 左上裸片 4 层(38×38 @ -56,-54) */
  readonly dieALayers = [
    { z: 26, fill: '#c6cfdf' },
    { z: 28, fill: '#ced6e4' },
    { z: 30, fill: '#d6dce8' },
    { z: 32, fill: '#dde3ed' },
  ];

  /** 右侧元件 3 层(32×20 @ 58,40) */
  readonly dieBLayers = [
    { z: 26, fill: '#c6cfdf' },
    { z: 28, fill: '#ced6e4' },
    { z: 30, fill: '#d6dce8' },
  ];
}
