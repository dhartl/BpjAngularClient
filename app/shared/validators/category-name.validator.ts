import { selector } from 'rxjs/operator/multicast';
import { Directive, Input } from '@angular/core';
import { CategoryService } from '../../categories/category.service';
import { AbstractControl, NG_ASYNC_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: 'input[categoryname]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: CategoryNameValidator, multi: true}]
})
export class CategoryNameValidator implements Validator {

    @Input() categoryname : number;
    
    constructor (private categoryService : CategoryService){
    }

    public validate(c: AbstractControl) : Promise<any> {
        let name = c.value;
        return this.categoryService.findCategoriesByName(name).map(result => {
            if(result == undefined || result.length == 0) {
                return {};
            }else {
                if(result.length == 1 && this.categoryname != undefined && result[0].categoryId == this.categoryname){
                    return {};
                }else {
                    return { categoryname: true };
                }
            }
           }).toPromise();   ;

    }

}