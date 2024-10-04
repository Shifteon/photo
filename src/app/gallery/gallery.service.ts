import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface Image {
    src: string;
    flickrLink: string;
    title?: string;
}

const images = {
    "images": [
      {
        "src": "https://live.staticflickr.com/65535/53854637344_6d28d26fb2_h.jpg",
        "title": "Playing in the golden light",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53854637344/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53826871478_ea2cc83163_h.jpg",
        "title": "Beautiful water",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53826871478/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
        "title": "Lodge on the falls",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53834319964_525100f502_h.jpg",
        "title": "Barn peeking through bushes",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834319964/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53834224448_f06342c7fc_h.jpg",
        "title": "Crowd leading to barn",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834224448/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53834145947_fde6720a36_h.jpg",
        "title": "Woman with hat sees me...",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834145947/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53834145957_33baa35cc7_h.jpg",
        "title": "Woman with hat",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834145957/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53835389639_90391d11d4_h.jpg",
        "title": "Dude working at stand",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53835389639/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53833072997_75f53cdb48_h.jpg",
        "title": "Side of barn and sky",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53833072997/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53834320439_ee0e05097e_h.jpg",
        "title": "Side of barn with crowd",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834320439/in/dateposted-public/"
      } 
    ]
};



@Injectable({providedIn: 'root'})
export class GalleryService {
  $imagesFetched: Subject<boolean> = new Subject();
  private images!: Image[];

  constructor() {
    this.fetchImages();
  }

  async getAllImages(): Promise<Image[]> {
    if (!images) {
      await this.fetchImages();
    } 
    return this.images;
  }

  async fetchImages() {
    try {
        const imageRequest = await fetch("https://hg5mxsyauwrw4md7.public.blob.vercel-storage.com/images.json");
        const imageJson = await imageRequest.json();
        this.images = imageJson.images;
        this.$imagesFetched.next(true);
        this.$imagesFetched.complete();
    } catch (error) {
        console.error(error);
    }
  }
}