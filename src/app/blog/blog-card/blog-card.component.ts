import { Component, HostListener, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Post } from '../blogs';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { ImageComponent } from '../../image/image.component';
import { MatChipsModule } from '@angular/material/chips';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    ImageComponent
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent implements OnInit {
  @Input() post!: Post;
  @Input() index!: number;
  isSmallScreen: boolean = false;
  subtitle: string = "";

  constructor(private blogService: BlogService, private router: Router, private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 550px)');
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 550px)');
  }

  onClickReadMore() {
    this.blogService.setOpenPost(this.index);
    this.router.navigate(['/blog-post'], { queryParams: { date: this.post.date } });
  }
}
