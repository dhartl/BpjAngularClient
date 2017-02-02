import { CategoryService } from '../../categories/category.service';
import { DropdownValue } from '../../shared/component/dropdown/dropdown.value';
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
		this.articleService.saveArticle(this.article).subscribe(article => this.article = article);
	}
}