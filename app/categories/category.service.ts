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
        var observable = this.apiService.saveCategory(category);
        this.subject.next(undefined);// Clear last Result since it's no longer relevant
        return observable;
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

    findCategoriesByName(name:string) : Observable<Category[]> {
        return this.apiService.findCategoryByName(name);
    }


}