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

  it('should render the logo image with bilingual alt text', async () => {
    const fixture = TestBed.createComponent(SiteHeaderComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector<HTMLImageElement>('.site-header__logo-img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toContain('华之喻');
    expect(img?.getAttribute('alt')).toContain('Huazhiyu');
  });
});
