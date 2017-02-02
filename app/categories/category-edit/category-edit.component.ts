import { Observable } from 'rxjs/Rx';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../../entities/category';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'category-edit',
	templateUrl: './category-edit.component.html'
})

export class CategoryEditComponent implements OnInit {

	submitPending: boolean;
	submitSuccessful: boolean = false;
	category: Category;

	constructor( 
		private route: ActivatedRoute,
  		private router: Router,
  		private categoryService: CategoryService) { }

	ngOnInit() {
	this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => {
			var id = +params['id'];
			if(id && id != 0) {
				return this.categoryService.findCategoryById(+params['id']);
			} else {
				var category = {} as Category;
				category.categoryId = 0;
				return Observable.of(category);
			}
		})
		.subscribe((category: Category) => this.category = category);

	 }

	onSubmit() {
		this.submitPending = true;
		this.categoryService.saveCategory(this.category).subscribe(category => {
			this.submitPending = false;
			this.category = category;
			this.submitSuccessful = true;
		});
	}

	hideAlert(newValue) {
		this.submitSuccessful = false;
	}
}