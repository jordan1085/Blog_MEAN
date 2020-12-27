import { Injectable } from '@angular/core';  // Para utilizar el servicio
import { HttpClient, HttpHeaders } from '@angular/common/http'; // HttpClient: libreria para peticiones ajax, HttpHeaders: mejor manejo de peticiones
import { Observable } from 'rxjs';  // Recojer los datos de la API
import { Article } from '../models/article'; // Modelo con la estructura de los objetos
import { Global } from './global'; // Url de la api

@Injectable()

export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient // Cargamos HttpClient 
    ) {
        this.url = Global.url;  
    }

    getArticles(last:any = null):Observable<any>{

        var articles = 'articles';
        
        if(last != null) {
            var articles = 'articles/true';
        }

        return this._http.get(this.url+articles);
    }
    
    // Metodo para sacar 1 articulo con la id 
    getArticle(articleId):Observable<any>{

        return this._http.get(this.url+'article/'+articleId);
    }

    search(searchString):Observable<any> {

        return this._http.get(this.url+'search/'+searchString);
    }
}