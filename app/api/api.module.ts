import { AuthGuard } from './guards/auth.guard';
import { AuthManagerService } from './authManager.service';
import { BpjApiService } from './bpjApi.service';
import { AuthService } from './auth.service';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
       
    ],
    providers: [
        BpjApiService, AuthService, AuthManagerService, AuthGuard
    ],
    exports: [
    ]
})
export class ApiModule {
}