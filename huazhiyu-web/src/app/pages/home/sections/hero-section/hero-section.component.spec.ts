import { TestBed } from '@angular/core/testing';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page h1', async () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('h1').length).toBe(1);
  });

  it('should render the approved Hero artwork with stable dimensions', async () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const visual = compiled.querySelector('.hero__visual');
    const image = visual?.querySelector('img');
    const webpSource = visual?.querySelector('source[type="image/webp"]');

    expect(visual?.querySelectorAll('img').length).toBe(1);
    expect(image?.getAttribute('src')).toBe('/images/hero-ip-structure-visual.png');
    expect(image?.getAttribute('width')).toBe('1619');
    expect(image?.getAttribute('height')).toBe('971');
    expect(image?.getAttribute('alt')).toBe('抽象的技术信息与知识产权保护结构示意图');
    expect(image?.getAttribute('loading')).toBe('eager');
    expect(image?.getAttribute('fetchpriority')).toBe('high');
    expect(image?.getAttribute('decoding')).toBe('async');
    expect(webpSource?.getAttribute('srcset')).toBe('/images/hero-ip-structure-visual.webp');
    expect(visual?.querySelector('.hero__composition, .hero__stage, svg')).toBeNull();
    expect(visual?.querySelector('.hero__visual-marker')).toBeNull();
  });

  it('should render one decorative transition curve after the Hero content', async () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const transition = compiled.querySelector('.hero__transition');

    expect(compiled.querySelectorAll('.hero__transition').length).toBe(1);
    expect(transition?.getAttribute('aria-hidden')).toBe('true');
    expect(transition?.querySelectorAll('path').length).toBe(1);
  });
});
