import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from '../../services/base.service';
import { Categoria } from '../models/Categoria';
import { Produto } from 'src/app/produto/models/produto';

@Injectable({
    providedIn: 'root'
  })
  
export class NavegacaoService extends BaseService {

    constructor(private http: HttpClient) { super();}

    obterCategorias(): Observable<Categoria[]>{
        let response = this.http
            .get<Categoria[]>(this.UrlServiceV1 + 'Categoria', this.ObterHeaderJson())
            .pipe(
                catchError(this.serviceError));
        
        return response;
            
    }
    obterProdutos(): Observable<Produto[]>{
        let response = this.http
            .get<Produto[]>(this.UrlServiceV1 + 'Produto', this.ObterHeaderJson())
            .pipe(
                catchError(this.serviceError));
        
        return response;

    }

}

