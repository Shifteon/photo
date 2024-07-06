import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Post } from '../blogs';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() post!: Post;
  @Input() index!: number;
  subtitle: string = "";

  constructor(private blogService: BlogService, private router: Router) {}

  onClickReadMore() {
    this.blogService.setOpenPost(this.index);
    this.router.navigate(['/blog-post']);
  }
}
