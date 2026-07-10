import { TestBed } from '@angular/core/testing';

import { SiteFooterComponent } from './site-footer.component';

describe('SiteFooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteFooterComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SiteFooterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
