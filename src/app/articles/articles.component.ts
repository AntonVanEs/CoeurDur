import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../article';
import { ArticleService } from '../article.service'; 

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() : void {
    const url = this.route.snapshot.paramMap.get('article.getUrl()');
    this.articleService.getArticle(url).subscribe(article => this.article = article);
  }

}
