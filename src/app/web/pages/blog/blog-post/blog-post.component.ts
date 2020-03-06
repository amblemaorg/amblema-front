import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/web/blog.model';
import { BlogService } from 'src/app/services/web/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  coverData = {
    slides: [
      {
        image: {
          desktop: './assets/images/banner-1.jpg',
          tablet: './assets/images/banner-movil-1.jpg',
          movil: './assets/images/banner-movil-1.jpg',
        }
      }
    ]
  }

  post;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.blogService.getPostBySlugJSON(params.get('postSlug'))
          .subscribe(data => {
            this.post = data;
          });
    });
  }

}
