export interface Post {
    title: string;
    subtitle: string;
    snippet: string;
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
  "title": "Farmers Market",
  "subtitle": "The Red Barn",
  "snippet": "At the farmers market last week, I managed to only take pictures of the red barn...",
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
      "I mostly like this next one because it puts more focus on the barn though we do lose the bottom half. I also enjoy the clouds in the sky and the subtle framing from the leaves.",
      "<i>"
    ],
    [
      "<c>",
      "These ones didn't turn out the best. The red tent in the first photo is very bright and distracting. The composition isn't bad though. The trash cans are almost a leading line to the dude and the bush and pole frame the woman with a hat. So at least the subjects are clear. The more I look at them the more I like them, but they still aren't my favorite haha",
      "One thing I didn't notice until later on is that the subjects are looking right at me... In some ways it makes the photos interesting, but it is also scary. I feel like I've been caught."
    ],
    [
      "<c>",
      "<i>",
      "<i>",
      "<i>"
    ],
    [
      "<l>",
      "<i>"
    ],
    [
      "<r>",
      "This photo is rather simple. The barn is framed nicely, and I find that the crowd works as a leading line to the barn. My eye tends to start with the bikers on the right and follows them until they get to the barn."
    ],
    [
      "<l>",
      "This next one is probably my favorite photo from this day. I love the colors and the simplicity. It is a nice contrast to the other photos I took. I almost didn't take this picture. I was leaving the market, and looked up through the bushes and saw this scene. I walked past it but I had to double back since it seemed like such a great composition.",
      "All the other photos do a better job at conveying the atmosphere of the market, but this one shows the beauty of the day. The blue sky sprinkled with wispy clouds, and the bright sunlight illuminating the green bush all add to the beauty of the scene.",
      "I did just notice the thing sticking out of the left side which is a little distracting... I will have to clean that up later. The branch at the top is cut off and I'm not sure how to feel about that haha"
    ],
    [
      "<r>",
      "<i>"
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
    ],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53835389639_90391d11d4_h.jpg",
        "title": "Dude working at stand",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53835389639/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53834145957_33baa35cc7_h.jpg",
        "title": "Woman with hat",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834145957/in/dateposted-public/"
      },
      {
        "src": "https://live.staticflickr.com/65535/53834145947_fde6720a36_h.jpg",
        "title": "Woman with hat sees me...",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834145947/in/dateposted-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53834224448_f06342c7fc_h.jpg",
        "title": "Crowd leading to barn",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834224448/in/dateposted-public/"
      }
    ],
    [],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53834319964_525100f502_h.jpg",
        "title": "Barn peeking through bushes",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53834319964/in/dateposted-public/"
      }
    ]
  ]
}
