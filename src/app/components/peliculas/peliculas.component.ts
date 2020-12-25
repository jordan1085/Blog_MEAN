import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})


export class PeliculasComponent implements OnInit {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;
  
  constructor(

    private _PeliculaService: PeliculaService

  ) {

    this.titulo = "Componente de peliculas";
    this.peliculas = this._PeliculaService.getPeliculas();
    this.fecha = new Date;

  }

  ngOnInit(): void {

  };

  mostrar(event) {
    this.favorita = event.pelicula.title;

  };
}
