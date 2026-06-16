import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBanner } from './hero-banner';
import { QuoteService } from '../../../../core/services/quote';

describe('HeroBanner', () => {
  let component: HeroBanner;
  let fixture: ComponentFixture<HeroBanner>;

  beforeEach(async () => {
    const quoteServiceSpy = jasmine.createSpyObj('QuoteService', ['openQuoteForm', 'closeQuoteForm']);

    await TestBed.configureTestingModule({
      imports: [HeroBanner],
      providers: [
        { provide: QuoteService, useValue: quoteServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
