import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoResolve } from '../produto/services/produto.resolve';
import { BuscarComponent } from './buscar/buscar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CarrinhoComponent } from '../pedido/carrinho/carrinho.component';
const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: 'buscar', component: BuscarComponent },
            {
                path: 'detalhes/:slug', component: DetalhesComponent,
                resolve: {
                    produto: ProdutoResolve
                }
            },
            { path: 'categoria/:slug', component: CategoriaComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }