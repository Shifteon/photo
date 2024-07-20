import { Injectable } from "@angular/core";
import { Post, defaultPost } from "./blogs";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class BlogService {
    $postsFetched: Subject<boolean> = new Subject();
    private allPosts: Post[] = [];
    private openPost: number = 0;

    constructor() {
        this.fetchPosts();
    }

    async fetchPosts() {
        try {
            const urlRequest = await fetch("https://hg5mxsyauwrw4md7.public.blob.vercel-storage.com/urls.json");
            const urls = await urlRequest.json();
            for (let url of urls.urls) {
                const res = await fetch(url);
                const json = await res.json();
                this.allPosts.push(json);
            }
            this.$postsFetched.next(true);
            this.$postsFetched.complete();
        } catch (error) {
            console.error(error);
        }
    }

    getMostRecentPost(): Post {
        return this.allPosts[this.allPosts.length - 1];
    }

    getPost(): Post {
        return defaultPost;
    }

    getAllPosts(): Post[] {
        return this.allPosts;
    }

    getOpenPost() {
        return this.allPosts[this.openPost] || defaultPost;
    }

    setOpenPost(index: number) {
        if (index < 0 || index > this.allPosts.length) return;
        this.openPost = index;
    }

    setOpenPostToMostRecent() {
        this.openPost = this.allPosts.length - 1;
    }
}