import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BlogCardComponent } from '../blog/blog-card/blog-card.component';
import { BlogCardContainerComponent } from '../blog/blog-card-container/blog-card-container.component';
import { BlogService } from '../blog/blog.service';
import { defaultPost, Post } from '../blog/blogs';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    BlogCardComponent,
    BlogCardContainerComponent,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  mostRecentPost: Post = defaultPost;

  constructor (private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.$postsFetched.subscribe(() => {
      this.mostRecentPost = this.blogService.getMostRecentPost();
    });
  }

  onClickReadMore() {
    this.blogService.setOpenPostToMostRecent();
    this.router.navigate(["/blog-post"]);
  }
}
