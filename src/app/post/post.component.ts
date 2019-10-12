import { Component, OnInit, Input } from '@angular/core';
import { Article, Source, ArticlesList } from '../NewsApiDataStructures';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  public articles: Article[];
  public articleCount: number;
  @Input() public sources: Source[];

  constructor() { }

  ngOnInit() {
  }

  onArticlesFetched(articlesList: ArticlesList) {
    if (articlesList.status === 'ok') {
      this.articleCount = articlesList.totalResults;
      this.articles = articlesList.articles;
    }
  }
}
