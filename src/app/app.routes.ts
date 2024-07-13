import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'blog-post',
    loadComponent: () => import('./blog/post/post.component').then(m => m.PostComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent)
  }
];
