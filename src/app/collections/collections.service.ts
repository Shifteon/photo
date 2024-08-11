import { Injectable } from "@angular/core";
import { Image } from "../gallery/gallery.service";

export interface Collection {
    name: string;
    images: Image[];
    headerImage: Image;
    description: string;
}

const testCollection = {
    "name": "Street",
    "headerImage": {
        "src": "https://live.staticflickr.com/65535/53914674889_c035fb3af4_h.jpg",
        "title": "Crossing",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674889/in/datetaken-public/"
    },
    "description": "Photography on the streets. I'm not very good at it, but I'm practicing. I spend a lot of time in Seattle because of work, so most if not all of these will be in Seattle.",
    "images": [
        {
            "src": "https://live.staticflickr.com/65535/53914674889_c035fb3af4_h.jpg",
            "title": "Crossing",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674889/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53913438127_bfef466077_h.jpg",
            "title": "Not Ready to Cross",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53913438127/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914340411_0bcc241120_h.jpg",
            "title": "Watch for Cars",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914340411/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914674769_77a22559ab_h.jpg",
            "title": "Blue Building",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674769/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914571433_8cc20f3925_h.jpg",
            "title": "Stand out",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914571433/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914571388_364deb7c18_h.jpg",
            "title": "Cool sculpture or something",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914571388/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914324446_e843db8e7a_h.jpg",
            "title": "Out of Focus...",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914324446/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914771430_95b8e7c81f_h.jpg",
            "title": "Contemplating",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771430/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53913437927_8f83968e81_h.jpg",
            "title": "Looking cool and getting lunch",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53913437927/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914324421_9250b1217a_h.jpg",
            "title": "Ready to Cross",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914324421/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914571173_d08e26f3ba_h.jpg",
            "title": "Waiting",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914571173/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914771340_172d153161_h.jpg",
            "title": "Don't get ran over",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771340/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914324351_8b2cd785bb_h.jpg",
            "title": "Bus Station Glass",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914324351/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914571648_367e10d35c_h.jpg",
            "title": "Window to another world",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914571648/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53913438397_4d2479d407_h.jpg",
            "title": "Cool Beanie",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53913438397/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914771840_8529739767_h.jpg",
            "title": "Truck in alley",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771840/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914674954_fb8c41ea00_h.jpg",
            "title": "Yellow bag",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674954/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914771955_29a346b7c3_h.jpg",
            "title": "Spotlight",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771955/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914771965_ab2fbc89e2_h.jpg",
            "title": "Cross the street",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771965/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914771765_28469e455e_h.jpg",
            "title": "Cat drawing",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771765/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914674894_f4925b0e88_h.jpg",
            "title": "Streetcar",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674894/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914324626_626498fa32_h.jpg",
            "title": "Through the Trees",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914324626/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914674854_eed5204d99_h.jpg",
            "title": "Three people below",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674854/in/datetaken-public/"
        }
    ]
}

@Injectable({providedIn: 'root'})
export class CollectionsService {
    
    async fetchCollections() {
        return Promise.resolve([testCollection]);
    }

    getSelectedCollection(): Collection {
        return testCollection;
    }
}