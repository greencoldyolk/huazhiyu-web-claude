import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { SITE_CONTENT } from '../../../../content/site-content.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * 06 提交新事项 — Phase 3(交互态版,docs/design/04/05/08)。
 * 本阶段:字段 hover/focus/error 契约、字符计数联动、上传区
 * hover/focus/drag-active 视觉态与可键盘操作的标准文件入口。
 * 仍不做:Typed Reactive Forms、校验规则、文件处理与直传 OSS(Phase 5),
 * 琥珀辉光与按钮 sheen(Phase 4)。
 */
@Component({
  selector: 'hzy-inquiry-section',
  imports: [RevealDirective],
  templateUrl: './inquiry-section.component.html',
  styleUrl: './inquiry-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InquirySectionComponent {
  protected readonly content = SITE_CONTENT.inquiry;

  /** 事项说明当前长度(按 Unicode 码点计,一个汉字记 1) */
  protected readonly descriptionLength = signal(0);

  /** 上传区拖拽悬停态 */
  protected readonly dragOver = signal(false);

  protected onDescriptionInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.descriptionLength.set(Array.from(value).length);
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOver.set(true);
  }

  protected onDragLeave(): void {
    this.dragOver.set(false);
  }

  protected onDrop(event: DragEvent): void {
    // 文件接收、校验与上传属于 Phase 5;此处只还原视觉态
    event.preventDefault();
    this.dragOver.set(false);
  }
}
