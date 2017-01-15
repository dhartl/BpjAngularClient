import { FilmsService } from '../services/films.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Film } from '../../entities/film';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'film-detail',
	templateUrl: './film-detail.component.html',
	styleUrls: [ './film-detail.component.css' ]
})

export class FilmDetailComponent implements OnInit {

	film: Film;

	constructor( 
		private route: ActivatedRoute,
  		private router: Router,
  		private filmsService: FilmsService) { }

	ngOnInit() {
	this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => this.filmsService.getFilmById(+params['id']))
		.subscribe((film: Film) => this.film = film);

	 }
}