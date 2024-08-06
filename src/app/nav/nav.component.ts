import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { EasterEggService } from '../easter-egg/easter-egg.service';

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
export class NavComponent implements OnInit {
  iconPath = "../../assets/images/turtle.png";
  constructor(private easterEggService: EasterEggService, private router: Router) {}

  ngOnInit(): void {
    this.easterEggService.$iconPathUpated.subscribe(() => {
      this.iconPath = this.easterEggService.getIconPath();
    });
  }

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
