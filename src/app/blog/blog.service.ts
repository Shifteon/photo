import { Injectable } from "@angular/core";
import { Post, posts } from "./blogs";

@Injectable({providedIn: 'root'})
export class BlogService {

    getPost(): Post {
        return posts[2024][6][29];
    }
}