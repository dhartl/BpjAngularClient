import { BpjApiService } from '../api/bpjApi.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Article } from '../entities/article';
import { Injectable } from '@angular/core';
@Injectable()
export class ArticleService {

    subject = new Subject<Article[]>();
    lastResult : Article[];

    constructor(private apiService: BpjApiService) {
         this.subject.subscribe(result => this.lastResult = result);      
    }

    saveArticle(article: Article) : Observable<Article> {
        var observable = this.apiService.saveArticle(article);
        this.subject.next(undefined);// Clear last Result since it's no longer relevant
        return observable;
}

    loadAll() {
        this.apiService.findAllArticles().subscribe(result => this.subject.next(result));
    }

    loadBySearchString(searchString: string) {
        this.apiService.findArticleBySearchString(searchString).subscribe(result => this.subject.next(result));
    }

    findArticleById(id: number) : Observable<Article> {
        return this.apiService.findArticleById(id);
    }

    findArticlesByName(name:string) : Observable<Article[]> {
        return this.apiService.findArticleByName(name);
    }

}