import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './articles/article.module';
import { CategoryModule } from './categories/category.module';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouterModule,
    CategoryModule,
    ArticleModule,
    AuthModule
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
