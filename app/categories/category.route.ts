import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';


const CATEGORY_ROUTE_CONFIG: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryDetailComponent},
  { path: 'category/edit/:id', component: CategoryEditComponent}
];

export const CategoryRouterModule = RouterModule.forChild(CATEGORY_ROUTE_CONFIG);