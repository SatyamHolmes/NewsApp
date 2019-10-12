import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Source, ArticlesList } from '../NewsApiDataStructures';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  public constraints = new FormGroup({
    sources: new FormControl({value: [], disabled: false}),
    query: new FormControl({value: '', disabled: false}),
    category: new FormControl({value: '', disabled: false}),
    country: new FormControl({value: '', disabled: false}),
  });

  @Input() public sources: Source[];
  @Output() public articlesFetchedEvent = new EventEmitter<ArticlesList>();

  public categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  public countries = [ {code: 'us', name: 'USA'},
    {code: 'in', name: 'India'},
  ];

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.constraints.value);
    this.newsApiService.filterByConstraints({
      sources: this.constraints.value.sources,
      query: this.constraints.value.query,
      category: this.constraints.value.category,
      country: this.constraints.value.country,
    }).subscribe(articles => this.articlesFetchedEvent.emit(articles));
  }

  onSourcesSelect(ev): void {
    if (this.constraints.get('sources').value.length) {
      this.constraints.get('category').patchValue('');
      this.constraints.get('category').disable();
      this.constraints.get('country').patchValue('');
      this.constraints.get('country').disable();
    } else {
      this.constraints.get('category').enable();
      this.constraints.get('country').enable();
    }
  }
}
