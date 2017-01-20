import { Character } from './../../entities/character';
import { Page } from '../../entities/page';
import { Observable, Subject } from 'rxjs/Rx';
import { ApiService } from '../../api/api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {

    private subject: Subject<Page<Character>> = new Subject<Page<Character>>();

    private lastResult: Page<Character>;


    constructor(private apiService: ApiService) {
        // Initializing not in OnNgInit, because Service has other
        // Lifecycle than component!
        this.subject.subscribe(page => this.lastResult = page);
    }


    getLastResult() : Page<Character> {
        return this.lastResult;
    }

    loadCharacters(name: string) : void {
        var observable = this.apiService.loadCharacters(name);
        observable.subscribe( result => this.subject.next(result));
    }

    getCharacterPage(): Observable<Page<Character>> {
        return this.subject.asObservable();
    }

    getCharacterById(id: number) : Observable<Character> {
        return this.apiService.findCharacterById(id);
    }

    loadCharacterPage(url: string) {
        var observable = this.apiService.loadPage(url);
        observable.subscribe( result => this.subject.next(<Page<Character>> result));
    }

}