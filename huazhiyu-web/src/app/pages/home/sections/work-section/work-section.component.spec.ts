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

  it('should render four single-line tabs with 机械 / 高端装备 active by default and four items', async () => {
    const fixture = TestBed.createComponent(WorkSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const tabs = compiled.querySelectorAll<HTMLButtonElement>('.fields__tab');
    expect(tabs.length).toBe(4);
    expect(tabs[0].textContent?.trim()).toBe('机械 / 高端装备');
    expect(tabs[3].textContent?.trim()).toBe('生物医药 / 生命科学');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(compiled.querySelectorAll('.fields__item').length).toBe(4);
    expect(compiled.querySelector('.fields__item-title')?.textContent).toContain('高端装备');
  });

  it('should render the mechanical visual by default', async () => {
    const fixture = TestBed.createComponent(WorkSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('hzy-mechanical-visual')).toBeTruthy();
    expect(compiled.querySelector('hzy-electrical-visual')).toBeNull();
  });

  it('should switch content and visual on tab click', async () => {
    const fixture = TestBed.createComponent(WorkSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll<HTMLButtonElement>('.fields__tab')[1].click();
    await fixture.whenStable();
    expect(compiled.querySelector('.fields__item-title')?.textContent).toContain('电子系统');
    expect(compiled.querySelector('hzy-electrical-visual')).toBeTruthy();
    expect(compiled.querySelector('hzy-mechanical-visual')).toBeNull();

    compiled.querySelectorAll<HTMLButtonElement>('.fields__tab')[2].click();
    await fixture.whenStable();
    expect(compiled.querySelector('.fields__item-title')?.textContent).toContain('化学工艺');
    expect(compiled.querySelector('hzy-chemical-visual')).toBeTruthy();

    compiled.querySelectorAll<HTMLButtonElement>('.fields__tab')[3].click();
    await fixture.whenStable();
    expect(compiled.querySelector('.fields__item-title')?.textContent).toContain('生物医药');
    expect(compiled.querySelector('hzy-biomedical-visual')).toBeTruthy();
  });

  it('should move active tab with arrow keys, Home and End', async () => {
    const fixture = TestBed.createComponent(WorkSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const tabs = compiled.querySelectorAll<HTMLButtonElement>('.fields__tab');
    tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await fixture.whenStable();
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');

    tabs[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
    await fixture.whenStable();
    expect(tabs[3].getAttribute('aria-selected')).toBe('true');

    tabs[3].dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
    await fixture.whenStable();
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
  });
});
