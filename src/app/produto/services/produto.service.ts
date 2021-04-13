import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from '../../services/base.service';
import { Produto } from '../../navegacao/models/Produto';

@Injectable({
    providedIn: 'root'
  })
  
export class ProdutoService extends BaseService {

    constructor(private http: HttpClient) { super();}

    obterPorSlug(slug: string): Observable<Produto> {
        return this.http
            .get<Produto>(this.UrlServiceV1 + "produto/" + slug, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorSlugCategoria(slug: string): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.UrlServiceV1 + "Categoria/produtos/" + slug, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}

