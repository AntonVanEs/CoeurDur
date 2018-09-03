import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ARTICLES } from './mock-articles';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles() : Observable<Article[]> {
    return of(ARTICLES)
  }

  getArticle(url: string) : Observable<Article> {
    return of(ARTICLES.find(article => article.getUrl() === url));
  }
}
