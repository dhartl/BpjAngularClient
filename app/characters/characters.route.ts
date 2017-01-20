import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent } from './characters.component';
import { Routes, RouterModule } from '@angular/router';


const CHARACTER_ROUTES_CONFIG: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'character/:id', component: CharacterDetailComponent}
];

export const CharactersRouterModule = RouterModule.forChild(CHARACTER_ROUTES_CONFIG);