import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogArchiveComponent } from './blog-archive/blog-archive.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    BlogArchiveComponent,
    BlogPostComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
