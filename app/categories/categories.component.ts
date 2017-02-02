import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'categories',
	templateUrl: './categories.component.html'
})

export class CategoriesComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() { }

	onNewClick() {
		this.router.navigate(['/category/edit', 0]);	
	}
}