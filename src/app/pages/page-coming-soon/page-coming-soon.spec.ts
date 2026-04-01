import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComingSoon } from './page-coming-soon';

describe('PageComingSoon', () => {
  let component: PageComingSoon;
  let fixture: ComponentFixture<PageComingSoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageComingSoon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageComingSoon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
