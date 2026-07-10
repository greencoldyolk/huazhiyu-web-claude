import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RevealDirective } from './reveal.directive';

@Component({
  imports: [RevealDirective],
  template: `
    <div class="group">
      <p hzyReveal="stagger-item">one</p>
      <p hzyReveal="stagger-item">two</p>
    </div>
  `,
})
class HostComponent {}

describe('RevealDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();
  });

  it('should create host with directive applied', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('[hzyreveal]').length).toBe(2);
  });
});
