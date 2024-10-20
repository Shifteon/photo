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
    "description": "Photography on the streets. I'm not very good at it, but I'm practicing. I spend a lot of time in Seattle because of work, so most if not all of these will be in Seattle. I'm going to go ahead and throw some architectural shots in here as well.",
    "images": [
        {
            "src": "https://live.staticflickr.com/65535/53997675681_0c89685a20_h.jpg",
            "title": "Under the Sign",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997675681/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997995049_4985352ed3_h.jpg",
            "title": "Stylish Grannies",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997995049/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997995084_affdf254e8_h.jpg",
            "title": "Walking",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997995084/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997994954_28b07929e2_h.jpg",
            "title": "What do they See?",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997994954/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997912658_bae48c5d3a_h.jpg",
            "title": "Up the Stairs",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997912658/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997996184_1ffda3de4e_h.jpg",
            "title": "Bricks",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997996184/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997676686_d10976b1e5_h.jpg",
            "title": "Parking Meter",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997676686/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997676636_91d01fd7fd_h.jpg",
            "title": "No Dogs",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997676636/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997676676_6f6e81f0a4_h.jpg",
            "title": "Biker",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997676676/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53996783822_1c677792ea_h.jpg",
            "title": "Off the Hood",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53996783822/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53998103910_774b3dc7ac_h.jpg",
            "title": "Dog",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53998103910/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997995949_2274998295_h.jpg",
            "title": "White Hat",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997995949/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53998103885_f516ee94ce_h.jpg",
            "title": "Blue Hat",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53998103885/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53998103795_03873cece9_h.jpg",
            "title": "Hotel",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53998103795/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997995784_d818bb4cfe_h.jpg",
            "title": "Delivery",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997995784/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997913403_9e3c323bf2_h.jpg",
            "title": "Tiles",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997913403/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997913273_3a5f38efd1_h.jpg",
            "title": "Clouds",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997913273/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997676171_ed765deb63_h.jpg",
            "title": "So Small",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997676171/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53998103590_ad2875018a_h.jpg",
            "title": "Leaning",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53998103590/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997676121_34aa11245a_h.jpg",
            "title": "Street Car",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997676121/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997995544_779dc30124_h.jpg",
            "title": "Tiled",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997995544/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53998103440_6622a794c3_h.jpg",
            "title": "Park",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53998103440/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997912983_da29c24fd0_h.jpg",
            "title": "On the Bus",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997912983/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53996783302_2d87c1cd64_h.jpg",
            "title": "Cool building",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53996783302/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997995384_693ce79708_h.jpg",
            "title": "Through the Window",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997995384/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53998103290_818ae68ef6_h.jpg",
            "title": "Table",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53998103290/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997912908_a73fceb94f_h.jpg",
            "title": "Playing",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997912908/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997912828_b5934d22c5_h.jpg",
            "title": "Red Jacket",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997912828/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53996783107_74ed45d1ea_h.jpg",
            "title": "Thinking",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53996783107/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53996783122_227962bc51_h.jpg",
            "title": "Bike in the Light",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53996783122/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53996801417_2bee072ac8_h.jpg",
            "title": "Glowing",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53996801417/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997912923_5d73b4bc80_h.jpg",
            "title": "By the Rail",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997912923/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997675711_8890f19d91_h.jpg",
            "title": "Too Bright",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997675711/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53997912718_d21aa866ae_h.jpg",
            "title": "Eating a Meal",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53997912718/in/datetaken-public/"
        },
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
            "src": "https://live.staticflickr.com/65535/53913438397_4d2479d407_h.jpg",
            "title": "Cool Beanie",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53913438397/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914571648_367e10d35c_h.jpg",
            "title": "Window to another world",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914571648/in/datetaken-public/"
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
            "src": "https://live.staticflickr.com/65535/53914771765_28469e455e_h.jpg",
            "title": "Cat drawing",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771765/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914324626_626498fa32_h.jpg",
            "title": "Through the Trees",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914324626/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914771965_ab2fbc89e2_h.jpg",
            "title": "Cross the street",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914771965/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914674894_f4925b0e88_h.jpg",
            "title": "Streetcar",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674894/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53914674854_eed5204d99_h.jpg",
            "title": "Three people below",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53914674854/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53996875427_92be43b2da_h.jpg",
            "title": "Down the Way",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53996875427/in/datetaken-public/"
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
            "src": "https://live.staticflickr.com/65535/53948776110_69af5adba1_h.jpg",
            "title": "Going for a drive",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948776110/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948648194_e5cb96c573_h.jpg",
            "title": "Grumpy Cat",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948648194/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948320766_5fb2aaf653_h.jpg",
            "title": "Main Street Home",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948320766/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948776440_d02ece72fc_h.jpg",
            "title": "Blue",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948776440/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948320681_00d467b29c_h.jpg",
            "title": "Collapsing",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948320681/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948775780_d868afcf55_h.jpg",
            "title": "Cat on Doorstep",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948775780/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948320986_754d707a91_h.jpg",
            "title": "Overgrown",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948320986/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948581183_7b0e753b95_h.jpg",
            "title": "Garden",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948581183/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53948775825_586323ca17_h.jpg",
            "title": "Red House",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53948775825/in/datetaken-public/"
        },
        {
            "src": "https://live.staticflickr.com/65535/53947423092_4f592204c6_h.jpg",
            "title": "Motel",
            "flickrLink": "https://www.flickr.com/photos/200972144@N04/53947423092/in/datetaken-public/"
        },
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

    getAllImages(): Image[] {
        let images: Image[] = [];
        for (const collection of this.collections) {
            images = [...images, ...collection.images];
        }
        console.log(images);
        return images;
    }
}