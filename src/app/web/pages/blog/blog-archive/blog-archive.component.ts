import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/web/blog.service';
import { Post } from 'src/app/models/web/blog.model';
// import 'src/assets/js/clamp.min.js';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.scss']
})
export class BlogArchiveComponent implements OnInit {

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

  postsList: Post[];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogPostsJSON();
  }

  getBlogPostsJSON() {
    this.blogService.getPostsListJSON()
        .subscribe(data => {
          // console.log(data);
          this.postsList = data.posts;
        });
  }

}
