import { Page } from '../entities/page';
import { Film } from '../entities/film';
import { Observable } from 'rxjs/Rx';
import { Resource } from '../entities/resource';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    private static filmUrl = "http://swapi.co/api/films";

    constructor(private http: Http) {
        
    }

    public loadResource<T extends Resource>(resource: T) : Observable<TextTrackCueList> {
        
        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this
                .http
                .get(this.crossOriginUrl(resource.url), { headers})
                .map(resp => resp.json());
    }



    public loadFilms(name: string) : Observable<Page<Film>> {
        return this.loadSearch<Film>(name, ApiService.filmUrl);
    }
    public findFilmById(id: number) : Observable<Film> {
        return this.loadOne<Film>(id, ApiService.filmUrl);
    }

    protected loadSearch<T extends Resource>(name: string, url: string) : Observable<Page<T>> {
        let search = new URLSearchParams();
        search.set('search', name);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(this.crossOriginUrl(url), { search, headers })
                .map(resp => resp.json());
                // ^^-- Observable
    }

    protected loadOne<T extends Resource>(id: number, url: string) {
        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let requestUrl = url +"/" +id;

        return this
                .http
                .get(this.crossOriginUrl(requestUrl), { headers })
                .map(resp => resp.json());
                // ^^-- Observable
    }

    protected crossOriginUrl(url: string) : string {
        // API does not support cors
        return 'http://cors-anywhere.herokuapp.com/' + url;
    }

}