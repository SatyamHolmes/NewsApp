import { Injectable } from '@angular/core';
import { SourcesList, ArticlesList } from './NewsApiDataStructures';
import { Observable } from 'rxjs';

export class Constraints {
  sources?: string[];
  query?: string;
  category?: string;
  country?: string;
}

@Injectable()

export abstract class NewsApiService {
  abstract getSources(): Observable<SourcesList>;
  abstract filterByConstraints(constraints: Constraints): Observable<ArticlesList>;
}
