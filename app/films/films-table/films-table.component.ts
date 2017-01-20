import { Router } from '@angular/router';
import { Film } from '../../entities/film';
import { Page } from '../../entities/page';
import { FilmsService } from '../services/films.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'films-table',
	templateUrl: 'films-table.component.html',
	providers: []
})

export class FilmsTableComponent implements OnInit {

	@Input() films: Page<Film>;

	constructor(
		private filmsService : FilmsService,
		private router: Router) { }

	ngOnInit() {
		if(!this.films) {
			this.films = this.filmsService.getLastResult();
			this.filmsService.getFilmPage().subscribe( page => this.films = page, err => console.log(err));
		}
	}

	onSelect(film: Film) {
		var id = film.url.split(/[\s/]+/).filter(item => item != "" && item).pop();
    	this.router.navigate(['/film', id]);
  	}

}