import { CharacterService } from './../services/character.service';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'character-search',
	templateUrl: './character-search.component.html',
})

export class CharacterSearchComponent implements OnInit {

	search: string;

	constructor(private characterService: CharacterService) { }

	ngOnInit() { 
		if(this.characterService.getLastResult() === undefined) {
			this.characterService.loadCharacters(null);
		}
	}

	onSubmit() {
		this.characterService.loadCharacters(this.search);
	 }
}