import { CharactersModule } from './../characters.module';
import { CharacterService } from './../services/character.service';
import { Character } from './../../entities/character';
import { Router } from '@angular/router';
import { Page } from '../../entities/page';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'character-table',
	templateUrl: 'character-table.component.html',
	providers: []
})

export class CharacterTableComponent implements OnInit {

	characters: Page<Character>;

	constructor(
		private characterService : CharacterService,
		private router: Router) { }

	ngOnInit() {
		this.characters = this.characterService.getLastResult();
		this.characterService.getCharacterPage().subscribe( page => this.characters = page, err => console.log(err));
	}

	onSelect(character: Character) {
		var id = character.url.split(/[\s/]+/).filter(item => item != "" && item).pop();
		this.router.navigate(['/character', id]);
  	}

	onNext() {
		this.characterService.loadCharacterPage(this.characters.next);
	}

	onPrevious() {
		this.characterService.loadCharacterPage(this.characters.previous);
	}

}