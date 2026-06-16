import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectLikoAuto } from './page-project-liko-auto';

describe('PageProjectLikoAuto', () => {
  let component: PageProjectLikoAuto;
  let fixture: ComponentFixture<PageProjectLikoAuto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjectLikoAuto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjectLikoAuto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
