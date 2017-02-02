import { ArticleService } from '../article.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'article-search',
	templateUrl: './article-search.component.html'
})

export class ArticleSearchComponent implements OnInit {

	search: string;

	constructor(private articleService: ArticleService) { }

	ngOnInit() {
		if(this.articleService.lastResult === undefined) {
			this.articleService.loadAll();
		}
	 }

	onSubmit() {
		this.articleService.loadBySearchString(this.search);
	 }
}