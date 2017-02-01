import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'category-search',
	templateUrl: './category-search.component.html'
})

export class CategorySearchComponent implements OnInit {

	search: string;

	constructor(private categoryService: CategoryService) { }

	ngOnInit() {
		if(this.categoryService.lastResult === undefined) {
			this.categoryService.loadAll();
		}
	 }

	onSubmit() {
		this.categoryService.loadBySearchString(this.search);
	 }
}