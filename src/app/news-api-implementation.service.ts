import { Injectable } from '@angular/core';
import { NewsApiService, Constraints } from './news-api.service';
import { Observable, of } from 'rxjs';
import { SourcesList, ArticlesList } from './NewsApiDataStructures';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class NewsApiImplementationService implements NewsApiService {
  private baseUrl = 'https://newsapi.org/';
  constructor(private httpClient: HttpClient) { }

  getSources(): Observable<SourcesList> {
    const url = `${this.baseUrl}v2/sources`;
    return this.httpClient.get<SourcesList>(url).pipe(
      catchError((err, caught) => {
        console.log(err);
        return of(new SourcesList());
      })
    );
  }

  filterByConstraints(constraints: Constraints): Observable<ArticlesList> {
    const url = `${this.baseUrl}v2/top-headlines`;
    let options = new HttpParams();
    if (constraints.sources) {
      options = options.append('sources', constraints.sources.join(','));
    }
    if (constraints.query) {
      options = options.append('q', constraints.query);
    }
    if (constraints.category) {
      options = options.append('country', constraints.country);
    }
    if (constraints.category) {
      options = options.append('category', constraints.category);
    }

    return this.httpClient.get<ArticlesList>(url, {params: options}).pipe(
      catchError((err, caught) => {
        console.log(err);
        return of(new ArticlesList());
      })
    );
  }

}
