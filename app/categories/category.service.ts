import { Observable, Subject } from 'rxjs/Rx';
import { BpjApiService } from '../api/bpjApi.service';
import { Category } from '../entities/category';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    
    subject = new Subject<Category[]>();
    lastResult : Category[];

    constructor(private apiService: BpjApiService) {
         this.subject.subscribe(result => this.lastResult = result);      
    }

    saveCategory(category: Category) : Observable<Category> {
        return this.apiService.saveCategory(category);
    }

    loadAll() {
        this.apiService.findAllCategories().subscribe(result => this.subject.next(result));
    }

    loadBySearchString(searchString: string) {
        this.apiService.findCategoryBySearchString(searchString).subscribe(result => this.subject.next(result));
    }

    findCategoryById(id: number) : Observable<Category> {
        return this.apiService.findCategoryById(id);
    }



}