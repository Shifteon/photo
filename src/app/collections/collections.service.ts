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

const testCollection2 = {
    "name": "Travel",
    "headerImage": {
        "src": "https://live.staticflickr.com/65535/53901992084_b9faecc45f_h.jpg",
        "title": "Path to the Beach",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901992084/in/datetaken-public/"
        },
    "description": "Photos from vacations and travels. There will probably be lots of different types of photos here.",
    "images": [
        {
            "src": "https://live.staticflickr.com/65535/53901893153_6699ad9c92_h.jpg",
            "title": "Start of trail (Bears!)",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901893153/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901638836_001a923852_h.jpg",
        "title": "Scary path",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901638836/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53900738152_baceb0d3c1_h.jpg",
        "title": "Some pole",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53900738152/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901992084_b9faecc45f_h.jpg",
        "title": "Path to the Beach",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901992084/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901892913_a67f93258f_h.jpg",
        "title": "Path to the Beach with ocean in view",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901892913/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901893163_267ef01ab0_h.jpg",
        "title": "Framed by Grass",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901893163/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53902076305_793e29c548_h.jpg",
        "title": "Sand Piper Eating?",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53902076305/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901893253_05a2469c25_h.jpg",
        "title": "Sand Pipers",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901893253/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901892348_9091e78c54_h.jpg",
        "title": "Gulls Chilling",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901892348/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901638356_fb07ba12da_h.jpg",
        "title": "Gulls Taking Off",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901638356/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901992124_cf6fc56e9f_h.jpg",
        "title": "Distant Building",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901992124/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901892823_79be6accf7_h.jpg",
        "title": "Flying a Rainbow Kite",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901892823/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901991634_3a3baf105e_h.jpg",
        "title": "Some Hotel",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901991634/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53901420127_79f8e11f70_h.jpg",
        "title": "Canterbury Inn",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901420127/in/datetaken-public/"
        },
        {
        "src": "https://live.staticflickr.com/65535/53902076630_df0d8101df_h.jpg",
        "title": "Where I Stayed",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53902076630/in/datetaken-public/"
        }
    ]
};

@Injectable({providedIn: 'root'})
export class CollectionsService {
    private selectedCollection = testCollection;
    private collections = [testCollection, testCollection2];
    
    async fetchCollections() {
        return Promise.resolve(this.collections);
    }

    getSelectedCollection(): Collection {
        return this.selectedCollection;
    }

    setSelectedCollection(index: number) {
        if (index < 0 || index > this.collections.length) return;
        this.selectedCollection = this.collections[index];
    }
}