import { TestBed } from '@angular/core/testing';

import { EvidenceSectionComponent } from './evidence-section.component';

describe('EvidenceSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvidenceSectionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EvidenceSectionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the three approved metrics with their complete claims and source', async () => {
    const fixture = TestBed.createComponent(EvidenceSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const metrics = [...compiled.querySelectorAll('.evidence__metric')];

    expect(metrics.length).toBe(3);
    expect(compiled.querySelector('.evidence__eyebrow')?.textContent?.trim()).toBe('VERIFIED PERFORMANCE');
    expect(metrics.map((metric) => metric.querySelector('.evidence__metric-primary')?.textContent?.trim())).toEqual([
      '全国 TOP 10',
      '连续 3 年',
      '连续 5 年',
    ]);
    expect(metrics.map((metric) => metric.querySelector('.evidence__metric-secondary')?.textContent?.trim())).toEqual([
      '湖北 TOP 1',
      '授权率超过 90%',
      '授权率超过 90%',
    ]);
    expect(compiled.querySelector('.evidence__source')?.textContent?.trim()).toBe(
      '数据来源：HimmPat，统计口径以原榜单及公司宣传资料为准。',
    );
    expect(compiled.querySelector('.evidence__layout')).not.toBeNull();
    expect(compiled.querySelector('.evidence__panel')).toBeNull();
    expect(compiled.querySelectorAll('br').length).toBe(0);
  });
});
