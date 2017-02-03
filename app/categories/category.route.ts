import { AuthGuard } from '../api/guards/auth.guard';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';


const CATEGORY_ROUTE_CONFIG: Routes = [
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
  { path: 'category/:id', component: CategoryDetailComponent, canActivate: [AuthGuard]},
  { path: 'category/edit/:id', component: CategoryEditComponent, canActivate: [AuthGuard]}
];

export const CategoryRouterModule = RouterModule.forChild(CATEGORY_ROUTE_CONFIG);