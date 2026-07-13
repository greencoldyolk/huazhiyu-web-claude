import { TestBed } from '@angular/core/testing';

import { MechanicalVisualComponent } from './mechanical-visual.component';

describe('MechanicalVisualComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicalVisualComponent],
    }).compileComponents();
  });

  it('should create the layered 3d gear', async () => {
    const fixture = TestBed.createComponent(MechanicalVisualComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.mechanical-visual[aria-hidden="true"]')).toBeTruthy();
    for (const part of [
      'iso-scene',
      'iso-float',
      'iso-plane',
      'iso-shadow',
      'dash-ring',
      'gear-spin',
      'gear-face',
      'gear-face-ring',
      'hub-top',
      'marker',
    ]) {
      expect(compiled.querySelector(`.${part}`)).toBeTruthy();
    }
    // 16 层轮体 + 1 齿面 + 6 层轮毂 + 1 轮毂顶面 = 24 层
    expect(compiled.querySelectorAll('.gear-spin svg').length).toBe(24);
  });
});
