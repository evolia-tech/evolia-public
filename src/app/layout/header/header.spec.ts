import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { QuoteService } from '../../core/services/quote';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    const quoteServiceSpy = jasmine.createSpyObj('QuoteService', ['openQuoteForm', 'closeQuoteForm']);

    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        { provide: QuoteService, useValue: quoteServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
