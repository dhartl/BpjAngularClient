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

	constructor( 
		private route: ActivatedRoute,
  		private router: Router,
  		private characterService: CharacterService) { }

	ngOnInit() {
	this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => this.characterService.getCharacterById(+params['id']))
		.subscribe((character: Character) => this.character = character);

	 }
}