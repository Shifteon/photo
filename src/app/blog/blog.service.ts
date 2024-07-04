import { Injectable } from "@angular/core";
import { Post, defaultPost } from "./blogs";

@Injectable({providedIn: 'root'})
export class BlogService {
    private allPosts: Post[] = [];
    private openPost: number = 0;

    constructor() {
        // this.parsePosts();
        // this.fetchPosts();
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
        } catch (error) {
            console.error(error);
        }
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

    // private parsePosts() {
    //     const allPosts = [];

    //     const date = new Date();
    //     const year = date.getFullYear();
    //     let month = date.getMonth() + 1;
    //     let day = date.getDate();

    //     // Nothing was ever posted before 2024
    //     const baseYear = 2024;
    //     for (let y = year; y >= baseYear; y--) {
    //         if (!posts[y]) continue;
    //         for (let m = month; m > 0; m--) {
    //             if (!posts[y][m]) continue;
    //             for (let d = day; d > 0; d--) {
    //                 if (posts[y] && posts[y][m] && posts[y][m][d]) {
    //                     allPosts.push(posts[y][m][d]);
    //                 }
    //             }
    //             day = new Date(y, m, 0).getDate();
    //         }
    //         month = 12;
    //     }
    //     this.allPosts = allPosts;
    // }
}