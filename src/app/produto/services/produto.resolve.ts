import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoService } from '../../produto/services/produto.service';
import { Produto } from '../models/produto';

@Injectable({
    providedIn: 'root'
  })
  
export class ProdutoResolve implements Resolve<Produto> {

    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoService.obterPorSlug(route.params['slug']);
    }
}
