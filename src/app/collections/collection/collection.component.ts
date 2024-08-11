import { Component, OnInit } from '@angular/core';
import { Collection, CollectionsService } from '../collections.service';
import { NavComponent } from "../../nav/nav.component";
import { GalleryComponent } from "../../gallery/gallery.component";

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [NavComponent, GalleryComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit {
  collection!: Collection;

  constructor(private collectionsService: CollectionsService) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    this.collection = this.collectionsService.getSelectedCollection();
  }
}
