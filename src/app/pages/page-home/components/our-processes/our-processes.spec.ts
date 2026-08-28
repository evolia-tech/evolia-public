import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProcesses } from './our-processes';

describe('OurProcesses', () => {
  let component: OurProcesses;
  let fixture: ComponentFixture<OurProcesses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProcesses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProcesses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
