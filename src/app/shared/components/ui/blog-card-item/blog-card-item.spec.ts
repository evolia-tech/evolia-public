import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardItem } from './blog-card-item';

describe('BlogCardItem', () => {
  let component: BlogCardItem;
  let fixture: ComponentFixture<BlogCardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
