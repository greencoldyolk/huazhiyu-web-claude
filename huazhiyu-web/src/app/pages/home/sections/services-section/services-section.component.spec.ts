import { TestBed } from '@angular/core/testing';

import { ServicesSectionComponent } from './services-section.component';

describe('ServicesSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSectionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ServicesSectionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render exactly six service cards with one warm card', async () => {
    const fixture = TestBed.createComponent(ServicesSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.service-card').length).toBe(6);
    expect(compiled.querySelectorAll('.service-card--warm').length).toBe(1);
  });
});
