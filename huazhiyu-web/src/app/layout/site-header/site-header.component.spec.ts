import { TestBed } from '@angular/core/testing';

import { SiteHeaderComponent } from './site-header.component';

describe('SiteHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeaderComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SiteHeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the site name', async () => {
    const fixture = TestBed.createComponent(SiteHeaderComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.site-header__logo-zh')?.textContent).toContain('华之喻');
  });
});
