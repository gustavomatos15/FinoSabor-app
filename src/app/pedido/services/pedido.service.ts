import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';
import { Pedido } from '../models/Pedido';

@Injectable({
    providedIn: 'root'
  })
  
export class PedidoService extends BaseService {

    constructor(private http: HttpClient) { super(); }


    obterPedidos(): Observable<Pedido[]>{
        let response = this.http
            .get<Pedido[]>(this.UrlServiceV1 + 'Pedido', this.ObterAuthHeaderJson())
            .pipe(
                catchError(this.serviceError));        
        return response;

    }

    obterPorId(id: string): Observable<Pedido> {
        return this.http
            .get<Pedido>(this.UrlServiceV1 + "Pedido/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

}
