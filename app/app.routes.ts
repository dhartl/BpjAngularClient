import { AuthGuard } from './api/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const APP_ROUTES_CONFIG: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES_CONFIG);

