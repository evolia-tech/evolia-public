import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectStella } from './page-project-stella';

describe('PageProjectStella', () => {
  let component: PageProjectStella;
  let fixture: ComponentFixture<PageProjectStella>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjectStella]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjectStella);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
