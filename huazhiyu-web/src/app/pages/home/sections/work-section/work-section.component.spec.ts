import { TestBed } from '@angular/core/testing';

import { WorkSectionComponent } from './work-section.component';

describe('WorkSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSectionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WorkSectionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render one featured panel and two secondary items', async () => {
    const fixture = TestBed.createComponent(WorkSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.work__featured').length).toBe(1);
    expect(compiled.querySelectorAll('.work__secondary-item').length).toBe(2);
  });
});
