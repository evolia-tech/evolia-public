import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBottomMenu } from './footer-bottom-menu';

describe('FooterBottomMenu', () => {
  let component: FooterBottomMenu;
  let fixture: ComponentFixture<FooterBottomMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBottomMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBottomMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
