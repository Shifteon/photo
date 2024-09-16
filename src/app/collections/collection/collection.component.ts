import { Component, OnInit } from '@angular/core';
import { Collection, CollectionsService } from '../collections.service';
import { NavComponent } from "../../nav/nav.component";
import { GalleryComponent } from "../../gallery/gallery.component";
import { Image } from '../../gallery/gallery.service';
import { getRandomImage } from '../../utilities/imageUtils';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [NavComponent, GalleryComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit {
  collection!: Collection;
  headerImage!: Image;

  constructor(private collectionsService: CollectionsService) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    this.collection = this.collectionsService.getSelectedCollection();
    this.headerImage = getRandomImage(this.collection.images);
  }
}
