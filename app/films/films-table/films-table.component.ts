import { Router } from '@angular/router';
import { Film } from '../../entities/film';
import { Page } from '../../entities/page';
import { FilmsService } from '../services/films.service';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'films-table',
	templateUrl: 'films-table.component.html',
	providers: []
})

export class FilmsTableComponent implements OnInit {

	films: Page<Film>;

	constructor(
		private filmsService : FilmsService,
		private router: Router) { }

	ngOnInit() {
		this.filmsService.getFilmPage().subscribe( page => this.films = page, err => console.log(err));
	}

	onSelect(film: Film) {
		var id = film.url.split(/[\s/]+/).filter(item => item != "" && item).pop();
    	this.router.navigate(['/film', id]);
  	}

}