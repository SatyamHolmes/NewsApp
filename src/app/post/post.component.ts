import { Component, OnInit, Input } from '@angular/core';
import { Article, Source, ArticlesList } from '../NewsApiDataStructures';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  public articles: Article[];
  public articleCount: number;
  public sources: Source[];

  constructor(private activatedRoute: ActivatedRoute,
              private newApiService: NewsApiService,
              private router: Router,
    ) { }

  ngOnInit() {
    if (!history.state.selectedSource) {
      const prevData = JSON.parse(sessionStorage.getItem('post-data'));
      if (!prevData) {
        this.router.navigate(['']);
      } else {
        this.articles = prevData.articles;
        this.articleCount = prevData.articleCount;
        this.sources = prevData.sources;
      }
    } else {
      this.articleCount = undefined;
      this.sources = history.state.sources;
      const source = history.state.selectedSource;
      this.newApiService.filterByConstraints({
        sources: [source],
      }).subscribe(articleList => this.onArticlesFetched(articleList));
    }
  }

  onArticlesFetched(articlesList: ArticlesList) {
    if (articlesList.status === 'ok') {
      this.articleCount = articlesList.totalResults;
      this.articles = articlesList.articles;
      sessionStorage.setItem('post-data', JSON.stringify({
        articles: this.articles,
        articleCount: this.articleCount,
        sources: this.sources
      }));
    }
  }
}
