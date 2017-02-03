import { AuthGuard } from '../api/guards/auth.guard';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesComponent } from './articles.component';
import { RouterModule, Routes } from '@angular/router';

const ARTICLE_ROUTE_CONFIG: Routes = [
  { path: 'articles', component: ArticlesComponent , canActivate: [AuthGuard]},
  { path: 'article/:id', component: ArticleDetailComponent, canActivate: [AuthGuard]},
  { path: 'article/edit/:id', component: ArticleEditComponent, canActivate: [AuthGuard]}
];

export const ArticleRouterModule = RouterModule.forChild(ARTICLE_ROUTE_CONFIG);