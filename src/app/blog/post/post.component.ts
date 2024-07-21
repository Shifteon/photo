import { Component, OnInit } from '@angular/core';
import { Post, defaultPost } from '../blogs';
import { BlogService } from '../blog.service';
import { NavComponent } from '../../nav/nav.component';
import { Image } from '../../gallery/gallery.service';
import { ImageComponent } from '../../image/image.component';
import { ActivatedRoute } from '@angular/router';

interface Section {
  text: string[];
  images: Image[];
  tags: {
    alignment: string;
    isImage: boolean;
  }
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NavComponent,
    ImageComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  body: Section[] = [];
  date: string = "";
  title: string = "";
  subtitle: string = "";
  private post: Post = defaultPost;
  
  constructor(private blogService: BlogService, private route: ActivatedRoute)  {}

  ngOnInit() {
    document.body.scrollTop = 0;
    this.blogService.$postsFetched.subscribe(() => {
      if (this.route.snapshot.queryParamMap.get('date')) {
        this.post = this.blogService.getByDate(this.route.snapshot.queryParamMap.get('date')?.toString() || "") || defaultPost;
      } else {
        this.post = this.blogService.getOpenPost();
      }
      this.date = this.post.date;
      this.title = this.post.title;
      this.subtitle = this.post.subtitle;
      this.processBody();
    });
    if (this.route.snapshot.queryParamMap.get('date')) {
      this.post = this.blogService.getByDate(this.route.snapshot.queryParamMap.get('date')?.toString() || "") || defaultPost;
    } else {
      this.post = this.blogService.getOpenPost();
    }
    this.date = this.post.date;
    this.title = this.post.title;
    this.subtitle = this.post.subtitle;
    this.processBody();
  }

  /**
   * Get the body ready for rendering. Add in the images
   */
  private processBody() {
    let imageSection = 0;
    this.post?.body.forEach((section) => {
      const s: Section = {
        text: [],
        images: [],
        tags: {
          alignment: "c",
          isImage: false
        }
      };
      let imageCount = 0;
      section.forEach((text: string, i) => {
        if (i === 0) {
          s.tags.alignment = text.charAt(1);
          return;
        }

        if (text === "<i>") {
          s.tags.isImage = true;
          const imageInfo = this.post.images[imageSection][imageCount];
          s.images.push({
            src: imageInfo.src,
            flickrLink: imageInfo.flickrLink,
            title: imageInfo.title
          });
          imageCount++;
        } else {
          s.text.push(text);
        }
        
      });
      this.body.push(s);
      imageSection++;
    });
  }
}
