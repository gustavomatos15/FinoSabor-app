import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Pedido } from '../models/Pedido';

@Injectable({
    providedIn: 'root'
  })
  
export class PedidoResolve implements Resolve<Pedido> {

    constructor(private pedidoService: PedidoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.pedidoService.obterPorId(route.params['id']);
    }
}
