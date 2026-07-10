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

  it('should render three facts without invented numbers', async () => {
    const fixture = TestBed.createComponent(EvidenceSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const values = Array.from(compiled.querySelectorAll('.evidence__fact-value'));
    expect(values.length).toBe(3);
    for (const v of values) {
      expect(v.textContent).not.toMatch(/\d/);
    }
  });
});
