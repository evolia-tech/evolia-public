import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBrandName } from './footer-brand-name';

describe('FooterBrandName', () => {
  let component: FooterBrandName;
  let fixture: ComponentFixture<FooterBrandName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBrandName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBrandName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
