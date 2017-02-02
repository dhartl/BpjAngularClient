import { ArticleService } from '../article.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../../entities/article';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'article-detail',
	templateUrl: './article-detail.component.html'
})

export class ArticleDetailComponent implements OnInit {

	article: Article;

	constructor( 
		private route: ActivatedRoute,
  		private router: Router,
  		private articleService: ArticleService) { }

	ngOnInit() {
	this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => this.articleService.findArticleById(+params['id']))
		.subscribe((article: Article) => this.article = article);

	 }

	 onEditClick() {
		this.router.navigate(['/article/edit', this.article.articleId]);
	 }
}