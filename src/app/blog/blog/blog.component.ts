import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogCardContainerComponent } from '../blog-card-container/blog-card-container.component';
import { BlogService } from '../blog.service';
import { defaultPost, Post } from '../blogs';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NavComponent,
    BlogCardComponent,
    BlogCardContainerComponent,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  mostRecentPost: Post = defaultPost;

  constructor (private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    this.blogService.$postsFetched.subscribe(() => {
      this.mostRecentPost = this.blogService.getMostRecentPost();
    });
  }

  onClickReadMore() {
    this.blogService.setOpenPostToMostRecent();
    this.router.navigate(["/blog-post", { queryParams: { date: this.mostRecentPost.date } }]);
  }
}
