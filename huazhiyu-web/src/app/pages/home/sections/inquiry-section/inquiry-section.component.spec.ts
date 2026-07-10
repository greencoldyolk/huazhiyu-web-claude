import { TestBed } from '@angular/core/testing';

import { InquirySectionComponent } from './inquiry-section.component';

describe('InquirySectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquirySectionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InquirySectionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a form, not a chat composer', async () => {
    const fixture = TestBed.createComponent(InquirySectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form.inquiry-form')).toBeTruthy();
    expect(compiled.querySelector('select#inquiry-matter-type')).toBeTruthy();
    expect(compiled.querySelector('textarea#inquiry-description')?.getAttribute('maxlength')).toBe('500');
    expect(compiled.querySelectorAll('label').length).toBeGreaterThanOrEqual(4);
  });
});
