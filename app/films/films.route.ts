import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films.component';
import { RouterModule, Routes } from '@angular/router';


const FILMS_ROUTE_CONFIG: Routes = [
  { path: 'films', component: FilmsComponent },
  { path: 'film/:id', component: FilmDetailComponent}
];

export const FilmsRouterModule = RouterModule.forChild(FILMS_ROUTE_CONFIG);