export interface Post {
    title: string;
    date: string;
    body: string[];
    images: { src: string; title?: string; flickrLink: string; }[];
    thumbnail: { src: string; flickrLink: string; };
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
    5: {
      28: {
        title: "My first post",
        date: "06/29/2024",
        thumbnail: { 
          src:  "https://live.staticflickr.com/65535/53825144897_d164a0882a_z.jpg",
          flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
        },
        body: [
          "<l>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
          "<r><img>",
          "<c>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
          "<l><img>",
          "<r><img>",
          "<c>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
        ],
        images: [
          {
            src: "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
            title: "Lodge on the falls",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
          },
          {
            src: "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
            title: "Lodge on the falls",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
          },
          {
            src: "https://live.staticflickr.com/65535/53826871478_ea2cc83163_h.jpg",
            title: "Calm Water",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53826871478/in/dateposted-public/",
          },
        ],
      },
    },
    6: {
      28: {
        title: "My Second post",
        date: "06/29/2024",
        thumbnail: { 
          src:  "https://live.staticflickr.com/65535/53825144897_d164a0882a_z.jpg",
          flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
        },
        body: [
          "<l>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
          "<r><img>",
          "<c>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
          "<l><img>",
          "<r><img>",
          "<c>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
        ],
        images: [
          {
            src: "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
            title: "Lodge on the falls",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
          },
          {
            src: "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
            title: "Lodge on the falls",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
          },
          {
            src: "https://live.staticflickr.com/65535/53826871478_ea2cc83163_h.jpg",
            title: "Calm Water",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53826871478/in/dateposted-public/",
          },
        ],
      },
      29: {
        title: "My Third post",
        date: "06/29/2024",
        thumbnail: { 
          src:  "https://live.staticflickr.com/65535/53825144897_d164a0882a_z.jpg",
          flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
        },
        body: [
          "<l>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
          "<r><img>",
          "<c>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
          "<l><img>",
          "<r><img>",
          "<c>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Molestie at elementum eu facilisis sed odio morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Odio pellentesque diam volutpat commodo sed egestas egestas.",
        ],
        images: [
          {
            src: "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
            title: "Lodge on the falls",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
          },
          {
            src: "https://live.staticflickr.com/65535/53825144897_9043ac103e_h.jpg",
            title: "Lodge on the falls",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53825144897/in/dateposted-public/",
          },
          {
            src: "https://live.staticflickr.com/65535/53826871478_ea2cc83163_h.jpg",
            title: "Calm Water",
            flickrLink: "https://www.flickr.com/photos/200972144@N04/53826871478/in/dateposted-public/",
          },
        ],
      },
    },
  },
};
