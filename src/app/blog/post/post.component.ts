import { Component, OnInit } from '@angular/core';
import { Post, defaultPost } from '../blogs';
import { BlogService } from '../blog.service';
import { NavComponent } from '../../nav/nav.component';

interface Section {
  text: string[];
  images: {
    imgSrc?: string;
    flickrLink?: string;
    imgTitle?: string;
  }[];
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
  
  constructor(private blogService: BlogService)  {}

  ngOnInit() {
    this.post = this.blogService.getOpenPost();
    this.date = this.post.date;
    this.title = this.post.title;
    this.subtitle = this.post.subtitle;
    this.processBody();
  }

  private parseTags(text: string): { alignment: string; group: boolean; isImage: boolean; } {
    const tagObject = {
      alignment: "c",
      group: false,
      isImage: false
    };
    const end = text.indexOf("</>");
    if (end === -1) return tagObject; // there are no tags
    const tags = text.substring(0, end + 3).split(">");
    tags.pop();
    tags.pop();
    tags.forEach(tag => {
      const value = tag.charAt(1);
      if (value === 'i') {
        tagObject.isImage = true;
        return;
      }
      if (value === '+') {
        tagObject.group = true;
        return;
      }
      if (["r", "c", "l"].includes(value)) {
        tagObject.alignment = value;
        return;
      }
    });
    console.log("tagObject", tagObject);
    return tagObject;
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
            imgSrc: imageInfo.src,
            flickrLink: imageInfo.flickrLink,
            imgTitle: imageInfo.title
          });
          imageCount++;
        } else {
          s.text.push(text);
        }
        
      });
      this.body.push(s);
      imageSection++;
    });
    console.log("body: ", this.body);
  }
}
