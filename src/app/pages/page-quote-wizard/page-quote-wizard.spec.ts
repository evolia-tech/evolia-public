import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageQuoteWizard } from './page-quote-wizard';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';

describe('PageQuoteWizard', () => {
  let component: PageQuoteWizard;
  let fixture: ComponentFixture<PageQuoteWizard>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const dialogServiceSpy = jasmine.createSpyObj('DialogService', ['open']);

    await TestBed.configureTestingModule({
      imports: [PageQuoteWizard],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DialogService, useValue: dialogServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQuoteWizard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
