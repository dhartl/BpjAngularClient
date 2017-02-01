import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../../entities/category';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'category-table',
	templateUrl: './category-table.component.html'
})

export class CategoryTableComponent implements OnInit {

	@Input() categories: Category[];

	constructor(
		private categoryService : CategoryService,
		private router: Router) { }

	ngOnInit() {
		if(!this.categories) {
			this.categories = this.categoryService.lastResult;
			this.categoryService.subject.subscribe( result =>this.categories = result, err => console.log(err));
		}
	}

	onSelect(category: Category) {
    	this.router.navigate(['/category', category.categoryId]);
  	}
}