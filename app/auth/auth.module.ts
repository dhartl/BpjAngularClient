import { AuthRouterModule } from './auth.routes';
import { ApiModule } from '../api/api.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'

@NgModule({
    imports: [
        CommonModule, FormsModule, ApiModule, AuthRouterModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
    ],
    exports: [
       
    ]
})
export class AuthModule {

}