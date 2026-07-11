import { TestBed } from '@angular/core/testing';

import { AdvantagesSectionComponent } from './advantages-section.component';

describe('AdvantagesSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagesSectionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AdvantagesSectionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render three rows, not a card grid', async () => {
    const fixture = TestBed.createComponent(AdvantagesSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.advantages__row').length).toBe(3);
    expect(compiled.querySelector('.advantages__eyebrow')?.textContent?.trim()).toBe('WHY HUAZHIYU');
    expect(compiled.querySelector('.advantages__lead')?.textContent?.replace(/\s/g, '')).toBe(
      '从技术理解，到权利落地',
    );
    expect(compiled.querySelector('.advantages__summary')?.textContent?.trim()).toBe(
      '好的知识产权服务，不只是按流程递交材料。',
    );
    expect([...compiled.querySelectorAll('.advantages__row-title')].map((item) => item.textContent?.trim())).toEqual([
      '懂技术，才能写清保护边界',
      '专业人员，直接参与关键环节',
      '围绕项目目标，而非止于材料递交',
    ]);
    expect(compiled.querySelectorAll('br').length).toBe(0);
  });
});
