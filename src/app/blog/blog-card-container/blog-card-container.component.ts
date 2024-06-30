import { Component } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-card-container',
  standalone: true,
  imports: [
    BlogCardComponent
  ],
  templateUrl: './blog-card-container.component.html',
  styleUrl: './blog-card-container.component.scss'
})
export class BlogCardContainerComponent {
  
}
