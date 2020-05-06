import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogArchiveComponent } from "./blog-archive/blog-archive.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogComponent } from "./blog.component";

const routes: Routes = [
  {
    path: "",
    component: BlogComponent,
    children: [
      {
        path: "",
        component: BlogArchiveComponent,
      },
      {
        path: "post/:postSlug",
        component: BlogPostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
