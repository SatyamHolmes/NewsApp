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
  sources: Source[];

  constructor(private newApiService: NewsApiService) {}

  ngOnInit() {
    this.newApiService.getSources().subscribe((response) => {
      if (response.status === 'ok') {
        this.sources = response.sources;
      }
    });
  }
}
