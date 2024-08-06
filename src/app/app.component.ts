import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EasterEggService } from './easter-egg/easter-egg.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'photo';
  constructor(private easterEggService: EasterEggService) {}

  ngOnInit(): void {
    this.easterEggService.init();
  }
}
