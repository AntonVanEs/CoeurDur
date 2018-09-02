import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

import { Article } from '../article';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() : void {
    this.articleService.getArticles().subscribe(article => this.articles = article);
  }

}
