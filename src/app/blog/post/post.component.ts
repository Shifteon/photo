import { Component, OnInit } from '@angular/core';
import { Post } from '../blogs';
import { BlogService } from '../blog.service';
import { NavComponent } from '../../nav/nav.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NavComponent,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  body: { isImage: boolean; text: string; imgSrc?: string; flickrLink?: string; alignment: string; imgTitle?: string; }[] = [];
  date: string = "";
  title: string = "";
  private post: Post | null = null;
  
  constructor(private blogService: BlogService)  {}

  ngOnInit() {
    this.post = this.blogService.getOpenPost();
    this.date = this.post.date;
    this.title = this.post.title;
    this.processBody();
  }

  /**
   * Get the body ready for rendering. Add in the images
   */
  private processBody() {
    let imageCount = 0;
    this.post?.body.forEach((text: string) => {
      const section: { isImage: boolean; text: string; imgSrc?: string; flickrLink?: string; alignment: string; imgTitle?: string; } = {
        isImage: false,
        // the alignment is always at the start and formatted as <c>, <r>, or <l>
        text: text.slice(3),
        alignment: text.substring(1, 2),
      };
      if (text.slice(3) === "<img>") {
        const imageInfo = this.post?.images[imageCount];
        section.isImage = true;
        section.imgSrc = imageInfo?.src;
        section.flickrLink = imageInfo?.flickrLink;
        section.imgTitle = imageInfo?.title || "";
        imageCount++;
      }
      this.body.push(section);
    });
  }
}
