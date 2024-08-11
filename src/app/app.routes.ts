import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'blog-post',
    loadComponent: () => import('./blog/post/post.component').then(m => m.PostComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: '8-22',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'collections',
    loadComponent: () => import('./collections/collections/collections.component').then(m => m.CollectionsComponent)
  },
  {
    path: 'collection',
    loadComponent: () => import('./collections/collection/collection.component').then(m => m.CollectionComponent)
  },
  // 404 takes us home for now
  {
    path: '**',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  }
];
