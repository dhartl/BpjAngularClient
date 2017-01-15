import { FilmsService } from '../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'films-search',
	templateUrl: './films-search.component.html',
})

export class FilmsSearchComponent implements OnInit {

	search: string;

	constructor(private filmsService: FilmsService) { }

	ngOnInit() { }

	onSubmit() {
		this.filmsService.loadFilms(this.search);
	 }
}