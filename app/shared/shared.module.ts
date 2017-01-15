import { RomanNumberPipe } from './pipes/roman-number.pipe';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
       RomanNumberPipe
    ],
    providers: [],
    exports: [
        RomanNumberPipe
    ]
})
export class SharedModule {
}