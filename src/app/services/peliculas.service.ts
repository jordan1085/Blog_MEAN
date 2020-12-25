import { Injectable } from '@angular/core'; // 
import { Pelicula } from '../models/pelicula';

@Injectable()

export class PeliculaService {

    public peliculas: Array<Pelicula>;

    constructor(){

        this.peliculas = [

            new Pelicula("Spiderman 4", 2019, '../../assets/images/Spiderman.jpg'),
            new Pelicula("Vengadores", 2020, '../../assets/images/Vengadores.jpg'),
            new Pelicula("Batman", 2021, '../../assets/images/Batman.jpg')
    
        ]
    }; 

    getPeliculas() {
        return this.peliculas;
    };
}