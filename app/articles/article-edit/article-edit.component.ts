import { CategoryService } from '../../categories/category.service';
import { Category } from '../../entities/category';
import { Observable } from 'rxjs/Rx';
import { Article } from '../../entities/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'article-edit',
	templateUrl: './article-edit.component.html'
})

export class ArticleEditComponent implements OnInit {

	submitPending: boolean;
	submitSuccessful: boolean = false;
	article: Article;
	categories: Category[];


	constructor( 
		private route: ActivatedRoute,
  		private router: Router,
  		private articleService: ArticleService, 
		private categoryService: CategoryService) { }

	ngOnInit() {
		this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => {
			var id = +params['id'];
			if(id && id != 0) {
				return this.articleService.findArticleById(+params['id']);
			} else {
				var article = {} as Article;
				article.articleId = 0;
				return Observable.of(article);
			}
		})
		.subscribe((article: Article) => this.article = article);

		this.categoryService.subject.subscribe(categories => {
			this.categories = categories;
		})
		this.categoryService.loadAll();

	 }

	onSubmit() {
		this.submitPending = true;
		this.articleService.saveArticle(this.article).subscribe(article => {
			this.submitPending = false;
			this.article = article;
			this.submitSuccessful = true;
		});
	}
	
	hideAlert(newValue) {
		this.submitSuccessful = false;
	}
}