import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGrid } from './services-grid';
import { QuoteService } from '../../../../core/services/quote';

describe('ServicesGrid', () => {
  let component: ServicesGrid;
  let fixture: ComponentFixture<ServicesGrid>;

  beforeEach(async () => {
    const quoteServiceSpy = jasmine.createSpyObj('QuoteService', ['openQuoteForm', 'closeQuoteForm']);

    await TestBed.configureTestingModule({
      imports: [ServicesGrid],
      providers: [
        { provide: QuoteService, useValue: quoteServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
