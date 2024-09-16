import { Image } from "../gallery/gallery.service";

export function getRandomImage(images: Image[]): Image {
    return images[Math.floor((Math.random()*images.length))];
}