import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'; //Importamos router para recoger parametros por la url
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService] // Cargando servicio
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {

      let id = params['id']; // Recojo el id que llega por la url

      // LLamo al metodo del servicio article y le paso el id y hago el llamado ajax
      this._articleService.getArticle(id).subscribe(
        response => {

          if(response.article) {

            // Asigno a mi variable article el valor que llega del llamado
            this.article = response.article;  

          } else {

            // redirecciono a home 
            this._router.navigate(['/home']); 

          }
        },
        error => {

          console.log(error); // Muestro mensaje de error
          this._router.navigate(['/home']); 

        }

      ); 

    });
  }

}
