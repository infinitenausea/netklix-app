import { Component } from '@angular/core';
import {Film} from "../../models/film.model";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {

  constructor(
    private _filmsService: FilmService,
  ) {}

  public get films(): Film[] {
    return this._filmsService.filtredFilms;
  }
}
