import { Film } from '../../entities/film';
import { Page } from '../../entities/page';
import { Observable, Subject } from 'rxjs/Rx';
import { ApiService } from '../../api/api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmsService {

    private subject: Subject<Page<Film>> = new Subject<Page<Film>>();
    private lastResult : Page<Film>;


    constructor(private apiService: ApiService) {
        this.subject.subscribe(page => this.lastResult = page);
    }

    getLastResult() : Page<Film> {
        return this.lastResult;
    }

    loadFilms(name: string) : void {
        var observable = this.apiService.loadFilms(name);
        observable.subscribe( result => this.subject.next(result));
    }

    getFilmPage(): Observable<Page<Film>> {
        return this.subject.asObservable();
    }

    getFilmById(id: number) : Observable<Film> {
        return this.apiService.findFilmById(id);
    }

}