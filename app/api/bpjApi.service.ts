import { Category } from '../entities/category';
import { Article } from '../entities/article';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BpjApiService {

    private static SERVICE_URL = "http://localhost:8080/api";
    private static ARTICLE_URL = BpjApiService.SERVICE_URL + "/article";
    private static CATEGORY_URL = BpjApiService.SERVICE_URL + "/category";

    private static CATEGORY_SEARCH_URL = BpjApiService.CATEGORY_URL +"/search";
    private static ARTICLE_SEARCH_URL = BpjApiService.ARTICLE_URL +"/search";



    constructor(private http: Http) {        
    }

    protected get headers() : Headers {
        let headers = new Headers();
        headers.set('Accept', 'application/json');

        //TODO: Auth

        return headers;       
    }

    protected findById<T>(id: number, url: string) : Observable<T> {
        let requestUrl = url +"/"+ id;
        let headers = this.headers;

        return this.http
                .get(requestUrl, {headers})
                .map(resp => resp.json());
    }

    protected findBySearchString<T>(searchString: string, url: string) : Observable<T[]>  {
        let search = new URLSearchParams();
        search.set('search', searchString);

        let headers = this.headers;

        return this.http
                .get(url, {headers, search})
                .map(resp => resp.json());
    }

     protected findByName<T>(name: string, url: string) : Observable<T[]>  {
        let search = new URLSearchParams();
        search.set('name', name);

        let headers = this.headers;

        return this.http
                .get(url, {headers, search})
                .map(resp => resp.json());
    }

    
    protected findAll<T>(url: string) : Observable<T[]>  {
        let headers = this.headers;

        return this.http
                .get(url, {headers})
                .map(resp => resp.json());
    }

    protected save<T>(item: T, url: string) : Observable<T>  {
        let headers = this.headers;

        return this.http
                .post(url,item, {headers})
                .map(resp => resp.json());
    }

/**
 *  Articles API Calls
 */

    public findArticleById(id: number) : Observable<Article> {
        return this.findById<Article>(id, BpjApiService.ARTICLE_URL);
    }

    public findArticleBySearchString(searchString: string) : Observable<Article[]> {
        return this.findBySearchString<Article>(searchString, BpjApiService.ARTICLE_SEARCH_URL);
    }

     public findArticleByName(name: string) : Observable<Article[]> {
        return this.findByName<Article>(name, BpjApiService.ARTICLE_SEARCH_URL);
    }

    public findAllArticles() : Observable<Article[]> {
        return this.findAll<Article>(BpjApiService.ARTICLE_URL);
    }

    public saveArticle(article: Article) : Observable<Article> {
        return this.save<Article>(article, BpjApiService.ARTICLE_URL);
    }

/**
 *  Categories API Calls
 */

    public findCategoryById(id: number) : Observable<Category> {
        return this.findById<Category>(id, BpjApiService.CATEGORY_URL);
    }

    public findCategoryBySearchString(searchString: string) : Observable<Category[]> {
        return this.findBySearchString<Category>(searchString, BpjApiService.CATEGORY_SEARCH_URL);
    }

     public findCategoryByName(name: string) : Observable<Category[]> {
        return this.findByName<Category>(name, BpjApiService.CATEGORY_SEARCH_URL);
    }

    public findAllCategories() : Observable<Category[]> {
        return this.findAll<Category>(BpjApiService.CATEGORY_URL);
    }

    public saveCategory(category: Category) : Observable<Category> {
        return this.save<Category>(category, BpjApiService.CATEGORY_URL);
    }

}