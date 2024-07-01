import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogService } from '../blog.service';
import { Post } from '../blogs';

@Component({
  selector: 'app-blog-card-container',
  standalone: true,
  imports: [
    BlogCardComponent
  ],
  templateUrl: './blog-card-container.component.html',
  styleUrl: './blog-card-container.component.scss'
})
export class BlogCardContainerComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getAllPosts();
  }
}
