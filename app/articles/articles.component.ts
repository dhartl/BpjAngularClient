import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'articles',
	templateUrl: './articles.component.html'
})

export class ArticlesComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() { }

	onNewClick() {
		this.router.navigate(['/article/edit', 0]);	
	}
}