import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public search: string; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {

    // Recojemos los paramatros que llegan por la URL para pasarlos al metodo del servicio  
    this._route.params.subscribe(params => {
      var search = params = params['search'];

      this.search = search;

      // Sacamos los ariculos de la busqueda
      this._articleService.search(search).subscribe(
        response => {
           if(response.articles) {
             this.articles = response.articles;
           }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      )
    })
  }

}
