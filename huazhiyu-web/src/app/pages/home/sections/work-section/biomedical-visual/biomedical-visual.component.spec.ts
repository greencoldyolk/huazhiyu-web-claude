import { TestBed } from '@angular/core/testing';

import { BiomedicalVisualComponent } from './biomedical-visual.component';

describe('BiomedicalVisualComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiomedicalVisualComponent],
    }).compileComponents();
  });

  it('should create the layered 3d capsule', async () => {
    const fixture = TestBed.createComponent(BiomedicalVisualComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.biomedical-visual[aria-hidden="true"]')).toBeTruthy();
    for (const part of [
      'iso-scene',
      'iso-float',
      'iso-plane',
      'dash-ring',
      'cap-spin',
      'cap-shadow',
      'cap-face',
      'gold-ring',
      'cap-lift',
      'cap-dot',
    ]) {
      expect(compiled.querySelector(`.${part}`)).toBeTruthy();
    }
    // 24 层收缩轮廓囊体 + 1 冠面 = 25 层(金点升降层内的 svg 不计)
    expect(compiled.querySelectorAll('.cap-spin > svg').length).toBe(25);
  });
});
