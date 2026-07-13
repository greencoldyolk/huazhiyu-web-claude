import { TestBed } from '@angular/core/testing';

import { ElectricalVisualComponent } from './electrical-visual.component';

describe('ElectricalVisualComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricalVisualComponent],
    }).compileComponents();
  });

  it('should create the layered 3d chip substrate', async () => {
    const fixture = TestBed.createComponent(ElectricalVisualComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.electrical-visual[aria-hidden="true"]')).toBeTruthy();
    for (const part of [
      'iso-scene',
      'iso-float',
      'iso-plane',
      'iso-shadow',
      'dash-ring',
      'chip-stack',
      'plate-face',
      'seal-ring',
      'die-a-top',
      'die-b-top',
      'encoder-face',
      'seal-dot',
    ]) {
      expect(compiled.querySelector(`.${part}`)).toBeTruthy();
    }
    // 16 层基板 + 1 顶面 + 4+1 裸片A + 3+1 元件B + 6 层编码盘 = 32 层
    expect(compiled.querySelectorAll('.chip-stack svg').length).toBe(32);
  });
});
