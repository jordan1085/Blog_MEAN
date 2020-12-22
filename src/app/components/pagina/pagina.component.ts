import { Component, OnInit } from '@angular/core';

// Importando componentes del router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;

  constructor(

    // Cargar parametros del router
    private _route: ActivatedRoute, // Sacar parametros de la URL
    private _router: Router // Redirecciones a otras paginas
  
  ) { }

  ngOnInit(): void {

    // Observable subscribe()
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre
    });

  }
 
  redireccion() {
    this._router.navigate(['/pagina-de-pruebas', 'Jordan']); // Redirigiendo con navigate() / pasando el parametro Jordan 
  }


}
