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
  });
});
