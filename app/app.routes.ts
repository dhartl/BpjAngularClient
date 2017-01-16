import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'film/:id', component: FilmDetailComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'character/:id', component: CharacterDetailComponent}
];

