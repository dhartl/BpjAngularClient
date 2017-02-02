import { ArticleService } from '../../articles/article.service';
import { selector } from 'rxjs/operator/multicast';
import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: 'input[articlename]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: ArticleNameValidator, multi: true}]
})
export class ArticleNameValidator implements Validator {

    @Input() articlename : number;
    
    constructor (private articleService : ArticleService){
    }

    public validate(c: AbstractControl) : Promise<any> {
        let name = c.value;
        return this.articleService.findArticlesByName(name).map(result => {
            if(result == undefined || result.length == 0) {
                return {};
            }else {
                if(result.length == 1 && this.articlename != undefined && result[0].articleId == this.articlename){
                    return {};
                }else {
                    return { articlename: true };
                }
            }
           }).toPromise();   ;

    }

}