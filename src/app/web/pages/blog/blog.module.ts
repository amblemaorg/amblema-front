import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogArchiveComponent } from "./blog-archive/blog-archive.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { PostCardComponent } from "./post-card/post-card.component";
import { SharedModule } from "../../shared/shared.module";
import { BlogComponent } from "./blog.component";
import { CategoriesListComponent } from "./widgets/categories-list/categories-list.component";
import { SearcherComponent } from "./widgets/searcher/searcher.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RecentPostCardComponent } from "./widgets/recent-post-card/recent-post-card.component";
import { RecentPostsListComponent } from "./widgets/recent-post-card/recent-posts-list.component";
import { SocialSharingComponent } from "./widgets/social-sharing/social-sharing.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { JwPaginationComponent } from "../../shared/jw-angular-pagination/lib/jw-pagination.component";

@NgModule({
  declarations: [
    BlogArchiveComponent,
    BlogPostComponent,
    PostCardComponent,
    BlogComponent,
    CategoriesListComponent,
    SearcherComponent,
    RecentPostCardComponent,
    RecentPostsListComponent,
    SocialSharingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class BlogModule {}
