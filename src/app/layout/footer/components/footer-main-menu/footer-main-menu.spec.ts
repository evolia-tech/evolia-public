import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainMenu } from './footer-main-menu';

describe('FooterMainMenu', () => {
  let component: FooterMainMenu;
  let fixture: ComponentFixture<FooterMainMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMainMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMainMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
