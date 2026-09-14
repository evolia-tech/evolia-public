import { Component, inject } from '@angular/core';
import { BlogService } from '../../../../core/services/blog';
import { BlogCardItem } from '../../../../shared/components/ui/blog-card-item/blog-card-item';
import { EvoButton } from "../../../../shared/components/ui/evo-button/evo-button";
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
  imports: [
    BlogCardItem,
    EvoButton,
    GsapSplitTextFadeInScrollTriggerDirective
  ]
})
export class Blog {
  private readonly blogService = inject(BlogService);

  // Récupération directe du Signal
  readonly posts = this.blogService.latestPosts;
}
