import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() : void {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

}
