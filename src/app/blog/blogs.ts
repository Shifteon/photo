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
  "title": "The Impeckable Truck",
  "subtitle": "Yummy food",
  "snippet": "Decent pictures and delicious food...",
  "date": "07/19/2024",
  "thumbnail": { 
    "src":  "https://live.staticflickr.com/65535/53868319801_df5b8e368a_h.jpg",
    "flickrLink": "https://www.flickr.com/photos/200972144@N04/53868319801/in/dateposted-public/"
  },
  "body": [
    [
      "<c>",
      "I haven't had a better chicken sandwich than the one at Impeckable chicken. I had a good oppurtunity to take some photos while I waited for my food.",
      "This picture is really simple, but I still like it. The colors are nice and the subjects are clear. Other than that, there is nothing special about this photo. It's just a simple moment, an interaction between two people, captured in a simple way."
    ],
    [
      "<c>",
      "<i>"
    ],
    [
      "<c>",
      "These next photos have a bit more compositional interest. They frame the subject with the truck's window, which also adds a misty look and a slight blue tint. I missed focus on both photos, but I don't think it is a big deal because it adds to the dreamy look. It is jarring to notice the in focus foreground though and I wonder what the photos would look like if I had focused on the people. The colors are beautiful."
    ],
    [
      "<l>",
      "<i>"
    ],
    [
      "<r>",
      "<i>"
    ],
    [
      "<l>",
      "<i>"
    ],
    [
      "<r>",
      "This is a nice detail shot. I wish I had captured more of the front. The photo stops abruptly and it feels like it is missing something. Overall I still like the photo.",
      "I'm very happy with the photos I got while getting lunch. Though I am much happier with the food I left with. Not really haha. The photos have and will last me much longer than my lunch did."
    ]
  ],
"images": [
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53868671484_a984522cd9_h.jpg",
        "title": "Ordering from the Impeckable Truck",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53868671484/in/dateposted-public/"
      }
    ],
    [],
    [
      {
        "src": "https://live.staticflickr.com/65535/53867413907_4cab43f760_h.jpg",
        "title": "Through the Impeckable Window (1)",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53867413907/in/dateposted-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53868734020_284a1c7cff_h.jpg",
        "title": "Through the Impeckable Window (2)",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53868734020/in/dateposted-public/"
      }
    ],
    [
      {
        "src": "https://live.staticflickr.com/65535/53868319801_fe381a778b_h.jpg",
        "title": "Impeckable Truck",
        "flickrLink": "https://www.flickr.com/photos/200972144@N04/53868319801/in/dateposted-public/"
      }
    ],
    []
  ]
}
