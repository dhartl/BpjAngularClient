import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';


const APP_ROUTES_CONFIG: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES_CONFIG);

