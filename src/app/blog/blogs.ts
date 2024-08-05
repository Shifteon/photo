export interface Post {
    title: string;
    subtitle: string;
    snippet: string;
    date: string;
    body: string[][];
    images: { src: string; title: string; flickrLink: string; }[][];
    thumbnail: { src: string; flickrLink: string; };
};

export interface TestPost {
  title: string;
  date: string;
  body: {
    text?: string;
    image?: { src: string; title?: string; flickrLink: string; };
  }[][];
  thumbnail: { src: string; flickrLink: string; };
}

export interface Posts {
  [year: number]: {
    [month: number]: {
      [day: number]: Post;
    }
  }
};

export const defaultPost: Post = {
  "title": "Ocean Shores",
  "subtitle": "Where'd the sun go?",
  "snippet": "I recently took a trip to Ocean Shores with my wife as a 'babymoon'. If you haven't heard of a babymoon, it is similar to...",
  "date": "08/04/2024",
  "thumbnail": { 
    "src":  "https://live.staticflickr.com/65535/53901992124_cf6fc56e9f_h.jpg",
    "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901992124/in/datetaken-public/"
  },
  "body": [
   [
    "<c>",
    "I recently took a trip to Ocean Shores with my wife as a 'babymoon'. If you haven't heard of a babymoon, it is similar to a honeymoon, but you take it before you have a baby to relax and be alone together one last time before welcoming the baby into the world. We already have a 16 month old and my wife is 32 weeks pregnant with baby #2, so this babymoon was desperately needed. We stayed in the small, but charming Canterbury Inn, which is conveniently placed near the beach. Unfortunately, the trail to the beach didn't seem too welcoming..."
   ],
   [
    "<l>",
    "<i>"
   ],
   [
    "<r>",
    "It might be too small to see in this photo, but the sign for the start of the trail also had a notice about recent bear sightings on it. This made us nervous to take the trail to the beach, and we almost turned back when we saw what the trail actually looked like."
   ],
   [
    "<l>",
    "This dark little trail I couldn't stand up in was the last place I wanted to meet a bear! We decided to continue anyway, and although we didn't see any bears, we did get eaten up by mosquitos. Luckily the trail opened up before too long, and awarded us with great views. Random side note, some of these photos may seem not as good in terms of exposure and image quality, and that's because I found a nice little digicam at a thrift shop at the beginning of the trip. Overall I am very happy with the photos it produces and I love using it, but this photo of the trail didn't turn out the best."
   ],
   [
    "<r>",
    "<i>"
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<c>",
    "It wasn't exactly warm in Ocean Shores. I think the highest it got that weekend was around 64°F. I also never really saw the sun. Considering this, these beaches weren't the kind where people lay out and sun tan, surf, or jump in the waves. Instead, people walked their dogs, flew kites, and watched the birds. Crazy people like me took photos in the some of the flattest light possible. I still love all these photos and I think some of them turned out fantastic, but a little light would not have hurt them."
   ],
   [
    "<l>",
    "<i>"
   ],
   [
    "<r>",
    "I love the framing in these next two photos. In this first photo, my wife is clearly framed by the grass. It strengthens the composition which in turn helps to keep the photo interesting in the flat light."
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<c>",
    "The framing in this photo is less obvious, and maybe I am the only one who sees it like this, but all the birds work together to frame the middle bird. I think this only works because there is a lot of space around the middle bird, so it feels like it is separate from all the other birds. I just love the bird's pose. At first I thought it was drinking, but I now realize that that doesn't make much sense... Maybe it is eating."
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<l>",
    "This is one of my favorite photos from the trip. I find it really interesting. I always saw that building and I thought it looked really cool, and it always seemed to be so distant. I also like that this photo has more colors than a lot of the other ones I took on the beach."
   ],
   [
    "<r>",
    "<i>"
   ],
   [
    "<c>",
    "<i>"
   ],
   [
    "<c>",
    "Despite the weather, the trip was a lot of fun! I got lots of good and memorable photos, and I even got a new camera. It was good to have some time to ourselves, and it didn't rain until the day we left, which was very fortunate. Ocean Shores is a fun place and there's still a lot we haven't explored, places such as Damon Point come to mind, so we'll have to come again sometime."
   ],
   [
    "<c>",
    "<i>",
    "<i>",
    "<i>"
   ]
  ],
"images": [
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901893153_6699ad9c92_h.jpg",
        "title": "Start of trail (Bears!)",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901893153/in/datetaken-public/"
      }
    ],
    [],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901638836_001a923852_h.jpg",
        "title": "Scary path",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901638836/in/datetaken-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53900738152_baceb0d3c1_h.jpg",
        "title": "Some pole",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53900738152/in/datetaken-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901992084_b9faecc45f_h.jpg",
        "title": "Path to the Beach",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901992084/in/datetaken-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901892913_a67f93258f_h.jpg",
        "title": "Path to the Beach with ocean in view",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901892913/in/datetaken-public/"
      }
    ],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901893163_267ef01ab0_h.jpg",
        "title": "Framed by Grass",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901893163/in/datetaken-public/"
      }
    ],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53902076305_793e29c548_h.jpg",
        "title": "Sand Piper Eating?",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53902076305/in/datetaken-public/"
      }
    ],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901893253_05a2469c25_h.jpg",
        "title": "Sand Pipers",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901893253/in/datetaken-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901892348_9091e78c54_h.jpg",
        "title": "Gulls Chilling",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901892348/in/datetaken-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901638356_fb07ba12da_h.jpg",
        "title": "Gulls Taking Off",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901638356/in/datetaken-public/"
      }
    ],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901992124_cf6fc56e9f_h.jpg",
        "title": "Distant Building",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901992124/in/datetaken-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53901892823_79be6accf7_h.jpg",
        "title": "Flying a Rainbow Kite",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53901892823/in/datetaken-public/"
      }
    ],
    [],
    [
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
  ]
}
