import { CategoryModule } from '../categories/category.module';
import { ArticleService } from './article.service';
import { ArticleTableComponent } from './article-table/article-table.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesComponent } from './articles.component';
import { ApiModule } from '../api/api.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleRouterModule } from './article.routes';
import {ComboBoxModule} from 'ng2-combobox';

@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule, ApiModule, ArticleRouterModule, CategoryModule, ComboBoxModule
    ],
    declarations: [
        ArticlesComponent, ArticleDetailComponent, ArticleEditComponent, ArticleSearchComponent, ArticleTableComponent
    ],
    providers: [
        ArticleService
    ],
    exports: [
       ArticlesComponent
    ]
})
export class ArticleModule {


}