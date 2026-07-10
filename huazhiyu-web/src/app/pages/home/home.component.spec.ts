import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render exactly six sections in the approved order', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const order = Array.from(compiled.children).map((el) => el.tagName.toLowerCase());
    expect(order).toEqual([
      'hzy-hero-section',
      'hzy-services-section',
      'hzy-advantages-section',
      'hzy-evidence-section',
      'hzy-work-section',
      'hzy-inquiry-section',
    ]);
  });

  it('should render a single h1', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('h1').length).toBe(1);
  });
});
