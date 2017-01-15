import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsTableComponent } from './films-table/films-table.component';
import { FilmsSearchComponent } from './films-search/films-search.component';
import { FilmsService } from './services/films.service';
import { ApiModule } from '../api/api.module';

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {FilmsComponent} from "./films.component"

@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule, ApiModule
    ],
    declarations: [
      FilmsComponent, FilmsSearchComponent, FilmsTableComponent, FilmDetailComponent
    ],
    providers: [
        FilmsService
    ],
    exports: [
        FilmsComponent, FilmDetailComponent
    ]
})
export class FilmsModule {


}