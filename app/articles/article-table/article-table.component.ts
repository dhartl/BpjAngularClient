import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../../entities/article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'article-table',
	templateUrl: './article-table.component.html'
})

export class ArticleTableComponent implements OnInit {

	@Input() articles: Article[];

	constructor(
		private articleService : ArticleService,
		private router: Router) { }

	ngOnInit() {
		if(!this.articles) {
			this.articles = this.articleService.lastResult;
			this.articleService.subject.subscribe( result =>this.articles = result, err => console.log(err));
		}
	}

	onSelect(article: Article) {
    	this.router.navigate(['/article', article.articleId]);
  	}
}