class Source {
  id: string;
  name: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
}

export class SourcesList {
  status: string;
  sources: Source[];
}

class Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export class ArticlesList {
  status: string;
  totalResults: number;
  articles: Article[];
}
