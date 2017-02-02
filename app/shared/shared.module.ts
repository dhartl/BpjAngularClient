import { CategoryNameValidator } from './validators/category-name.validator';
import { RomanNumberPipe } from './pipes/roman-number.pipe';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
       RomanNumberPipe, CategoryNameValidator
    ],
    providers: [],
    exports: [
        RomanNumberPipe, CategoryNameValidator
    ]
})
export class SharedModule {
}