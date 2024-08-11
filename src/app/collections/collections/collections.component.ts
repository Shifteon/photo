import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../nav/nav.component";
import { Collection, CollectionsService } from '../collections.service';
import { MatCard, MatCardActions, MatCardContent, MatCardImage, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    NavComponent,
    MatCard,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatCardImage,
    MatCardTitle
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent implements OnInit {
  collections: Collection[] = [];
  headerImgSrc: string = "https://live.staticflickr.com/65535/53913437927_8f83968e81_h.jpg";

  constructor(private collectionsService: CollectionsService, private router: Router) {}

  async ngOnInit() {
    document.body.scrollTop = 0;
    this.collections = await this.collectionsService.fetchCollections();
    // get random image for header
    const randomImages = this.collections[Math.floor((Math.random()*this.collections.length))].images;
    this.headerImgSrc = randomImages[Math.floor((Math.random()*randomImages.length))].src;
  }

  onClickCollection() {
    this.router.navigate(['/collection']);
  }
}
