import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})


export class PeliculasComponent implements OnInit {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  
  constructor() {
    this.titulo = "Componente de peliculas";
    this.peliculas = [

      new Pelicula("Spiderman 4", 2019, '../../assets/images/Spiderman.jpg'),
      new Pelicula("Vengadores", 2020, '../../assets/images/Vengadores.jpg'),
      new Pelicula("Batman", 2021, '../../assets/images/Batman.jpg')


    ];
  }

  ngOnInit(): void {

  }

  mostrar(event) {
    this.favorita = event.pelicula.title;

  }


}
