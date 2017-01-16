import { CharactersModule } from './characters/characters.module';
import { FilmsModule } from './films/films.module';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
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
    FilmsModule,
    CharactersModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
