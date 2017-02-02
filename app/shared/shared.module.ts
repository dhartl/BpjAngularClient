import { ArticleNameValidator } from './validators/article-name.validator';
import { CategoryNameValidator } from './validators/category-name.validator';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
       CategoryNameValidator, ArticleNameValidator
    ],
    providers: [],
    exports: [
        CategoryNameValidator, ArticleNameValidator
    ]
})
export class SharedModule {
}