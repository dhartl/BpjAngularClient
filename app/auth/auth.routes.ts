import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'

const AUTH_ROUTE_CONFIG: Routes = [
  { path: 'login', component: LoginComponent },
];

export const AuthRouterModule = RouterModule.forChild(AUTH_ROUTE_CONFIG);