export interface Post {
    title: string;
    date: string;
    body: string[][];
    images: { src: string; title?: string; flickrLink: string; }[][];
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
  "title": "Farmers Market (The Red Barn)",
  "date": "07/03/2024",
  "thumbnail": { 
    "src":  "https://live.staticflickr.com/65535/53825144897_d164a0882a_z.jpg",
    "flickrLink": "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/"
  },
  "body": [
    [
      "<l>",
      "At the farmers market last week, I managed to only take pictures of the red barn haha It kept on catching my eye so I couldn't help but photograph it. I think this first picture worked ok. I really enjoy the colors and the contrast it adds to the image. I think that is something that will come up with most of these pictures. Shooting in the noon sun meant the colors have to be the main point of contrast in the images, so I'm glad it ended up working out.",
      "The crowd actually adds to the photo I think. In my opinion they set the scene and add interest. Having people in the photo shows the activity and the energy of the market."
    ],
    [
      "<r>",
      "<i>"
    ],
    [
      "<c>",
      "<i>",
      "I mostly like this next one because it puts more focus on the barn. I also enjoy the clouds in the sky and the subtle framing from the leaves."
    ]
  ],
  "images": [
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53834320439_ee0e05097e_h.jpg",
        "title": "Side of barn with crowd",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834320439/in/dateposted-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53833072997_75f53cdb48_h.jpg",
        "title": "Side of barn and sky",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53833072997/in/dateposted-public/"
      }
    ]
  ]
}
