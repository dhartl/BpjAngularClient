import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterTableComponent } from './character-table/character-table.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { CharacterService } from './services/character.service';
import { ApiModule } from '../api/api.module';

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CharactersComponent} from "./characters.component"

@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule, ApiModule
    ],
    declarations: [
      CharactersComponent, CharacterSearchComponent, CharacterTableComponent, CharacterDetailComponent
    ],
    providers: [
        CharacterService
    ],
    exports: [
        CharactersComponent, CharacterDetailComponent
    ]
})
export class CharactersModule {


}