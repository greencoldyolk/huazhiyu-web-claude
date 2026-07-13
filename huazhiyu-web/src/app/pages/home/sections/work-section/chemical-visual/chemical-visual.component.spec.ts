import { TestBed } from '@angular/core/testing';

import { ChemicalVisualComponent } from './chemical-visual.component';

describe('ChemicalVisualComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicalVisualComponent],
    }).compileComponents();
  });

  it('should create the layered 3d hex lattice', async () => {
    const fixture = TestBed.createComponent(ChemicalVisualComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.chemical-visual[aria-hidden="true"]')).toBeTruthy();
    for (const part of [
      'iso-scene',
      'iso-float',
      'iso-plane',
      'iso-shadow',
      'dash-ring',
      'lattice-spin',
      'plate-face',
      'bond-ring',
      'prism-top',
      'crystal-top',
      'electron',
    ]) {
      expect(compiled.querySelector(`.${part}`)).toBeTruthy();
    }
    // 16 层板 + 1 顶面 + 6+1 中央结晶 + 2×(3+1) 小晶粒 + 1 电子层 = 33 层
    expect(compiled.querySelectorAll('.lattice-spin svg').length).toBe(33);
  });
});
