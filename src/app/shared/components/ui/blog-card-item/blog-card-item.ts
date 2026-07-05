import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogPostItem } from '../../../models/blog-post-item';

@Component({
  selector: 'app-blog-card-item',
  templateUrl: './blog-card-item.html',
  styleUrl: './blog-card-item.scss',
  imports: [DatePipe, RouterLink]
})

export class BlogCardItem {
  post = input.required<BlogPostItem>();
}
