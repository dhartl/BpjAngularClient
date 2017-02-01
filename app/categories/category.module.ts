import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CategoryRouterModule } from './category.route';
import {CategoriesComponent} from './categories.component'


import { RouterModule } from '@angular/router';
import { ApiModule } from '../api/api.module';

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

import { CategoryService } from './category.service';



@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule, ApiModule, CategoryRouterModule
    ],
    declarations: [
        CategoriesComponent, CategorySearchComponent, CategoryTableComponent, CategoryDetailComponent, CategoryEditComponent
    ],
    providers: [
        CategoryService
    ],
    exports: [
       CategoriesComponent
    ]
})
export class CategoryModule {


}