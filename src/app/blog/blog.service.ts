import { Injectable } from "@angular/core";
import { Post, posts } from "./blogs";

@Injectable({providedIn: 'root'})
export class BlogService {
    private allPosts: Post[] = [];
    private openPost: number = 0;

    constructor() {
        this.generateAllPosts();
    }

    getPost(): Post {
        return posts[2024][6][29];
    }

    getAllPosts(): Post[] {
        return this.allPosts;
    }

    getOpenPost() {
        return this.allPosts[this.openPost];
    }

    setOpenPost(index: number) {
        if (index < 0 || index > this.allPosts.length) return;
        this.openPost = index;
    }

    private generateAllPosts() {
        const allPosts = [];

        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        // Nothing was ever posted before 2024
        const baseYear = 2024;
        for (let y = year; y >= baseYear; y--) {
            if (!posts[y]) continue;
            for (let m = month; m > 0; m--) {
                if (!posts[y][m]) continue;
                for (let d = day; d > 0; d--) {
                    if (posts[y] && posts[y][m] && posts[y][m][d]) {
                        allPosts.push(posts[y][m][d]);
                    }
                }
                day = new Date(y, m, 0).getDate();
            }
            month = 12;
        }
        this.allPosts = allPosts;
    }
}