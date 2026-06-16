import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectSopranoVesinet } from './page-project-soprano-vesinet';

describe('PageProjectSopranoVesinet', () => {
  let component: PageProjectSopranoVesinet;
  let fixture: ComponentFixture<PageProjectSopranoVesinet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjectSopranoVesinet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjectSopranoVesinet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
