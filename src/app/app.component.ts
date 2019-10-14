import { Component, OnInit } from '@angular/core';
import { Source } from './NewsApiDataStructures';
import { NewsApiService } from './news-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'news-app';

  constructor() {}

  ngOnInit() {
  }
}
