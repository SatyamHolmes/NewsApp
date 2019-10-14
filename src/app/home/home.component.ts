import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../NewsApiDataStructures';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sources: Source[];
  public selectedSource = new FormControl();
  filteredOptions: Observable<Source[]>;

  constructor(private router: Router,
              private newsApiService: NewsApiService
    ) { }

  ngOnInit() {
    this.newsApiService.getSources().subscribe((sourceList) => {
      this.sources = sourceList.sources;
      this.filteredOptions = this.selectedSource.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.sources.slice())
      );
    });
  }

  displayFn(source?: Source): string | undefined {
    return source ? source.name : undefined;
  }

  private _filter(name: string): Source[] {
    const filterValue = name.toLowerCase();
    return this.sources.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onSearch() {
    console.log(this.selectedSource.value.id);
    this.router.navigate(['post'], {state: {
      sources: this.sources,
      selectedSource: this.selectedSource.value.id
    }});
  }

}
