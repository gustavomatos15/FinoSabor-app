import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Pedido } from '../models/Pedido';
import { BaseService } from 'src/app/shared/services/base.service';
import { CarrinhoModel } from 'src/app/shared/models/carrinho-model';

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


    enviarPedido(pedido: CarrinhoModel): Observable<Pedido> {
        let response = this.http
            .post(this.UrlServiceV1 + 'Pedido', pedido, this.ObterAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

}
