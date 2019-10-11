import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
  }

  handleClick(): void {
    this.newsApiService.filterByConstraints({query: 'joker', country: 'us', category: 'entertainment'}).subscribe(news => console.log(news));
  }
}
