import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private router: Router) {}

  onHomeClick() {
    this.router.navigate(['/']);
  }

  onBlogButtonClick() {
    this.router.navigate(['/blog']);
  }

  onGalleryButtonClick() {
    this.router.navigate(['/gallery']);
  }
}
