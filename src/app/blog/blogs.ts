export interface Post {
    title: string;
    date: string;
    body: string[];
    images: { src: string; title?: string; flickrLink: string; thumbnail: string; }[];
};

export interface Posts {
  [year: number]: {
    [month: number]: {
      [day: number]: Post;
    }
  }
};

export const posts: Posts = {
  2024: {
    6: {
      29: {
        title: "My first post",
        date: "06/29/2024",
        body: [
          "<l>This is a parapgraph",
          "<r><img>",
          "<c>This is another parapgraph",
        ],
        images: [
          {
            thumbnail: "https://live.staticflickr.com/65535/53825144897_d164a0882a_z.jpg",
            src: "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
            title: "A subtitle",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
          },
        ],
      },
    },
  },
};

