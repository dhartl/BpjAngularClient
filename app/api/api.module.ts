import { BpjApiService } from './bpjApi.service';
import { ApiService } from './api.service';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
       
    ],
    providers: [
        ApiService,
        BpjApiService
    ],
    exports: [
    ]
})
export class ApiModule {
}