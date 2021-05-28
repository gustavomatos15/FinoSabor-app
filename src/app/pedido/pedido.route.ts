import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from '../pedido/detalhes/detalhes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListaComponent } from './lista/lista.component';
import { PedidoAppComponent } from './pedido.app.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { PedidoResolve } from './services/pedido.resolve';

const pedidoRouterConfig: Routes = [
  {
    path: '', component: PedidoAppComponent,
    children: [
      { path: 'carrinho', component: CarrinhoComponent },
      {
         path: 'detalhes/:id', component: DetalhesComponent,
         resolve: {
          pedido: PedidoResolve
        }
        
      },
      { path: 'lista', component: ListaComponent },
      { path: 'realizar-pedido', component: RealizarPedidoComponent },

    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pedidoRouterConfig)
  ],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
