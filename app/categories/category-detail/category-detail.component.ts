import { CategoryService } from '../category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../../entities/category';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'category-detail',
	templateUrl: './category-detail.component.html'
})

export class CategoryDetailComponent implements OnInit {

	category: Category;

	constructor( 
		private route: ActivatedRoute,
  		private router: Router,
  		private categoryService: CategoryService) { }

	ngOnInit() {
	this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => this.categoryService.findCategoryById(+params['id']))
		.subscribe((category: Category) => this.category = category);

	 }

	 onEditClick() {
		this.router.navigate(['/category/edit', this.category.categoryId]);
	 }
}