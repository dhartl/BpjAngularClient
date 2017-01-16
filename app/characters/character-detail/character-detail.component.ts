import { FilmsService } from '../../films/services/films.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Subject } from 'rxjs/Rx';
import { Film } from './../../entities/film';
import { Page } from './../../entities/page';
import { CharacterService } from './../services/character.service';
import { Character } from '../../entities/character';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'character-detail',
	templateUrl: './character-detail.component.html',
	styleUrls: [ './character-detail.component.css' ]
})

export class CharacterDetailComponent implements OnInit {

	character: Character;

	filmPage: Page<Film>;

	constructor( 
		private route: ActivatedRoute,
  		private router: Router,
  		private characterService: CharacterService,
		private filmsService: FilmsService) { }

	ngOnInit() {
	this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => this.characterService.getCharacterById(+params['id']))
		.subscribe((character: Character) => {
			this.character = character;
			this.filmPage =<Page<Film>> {
			 	results: character ? character.filmObjects : null,
				count: character ? character.films.length : 0
		 	};
		});

	 }
}