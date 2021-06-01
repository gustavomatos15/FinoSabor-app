import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from './lista/lista.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { PedidoAppComponent } from './pedido.app.component';
import { PedidoRoutingModule } from './pedido.route';

@NgModule({
  declarations: [
    PedidoAppComponent,
    CarrinhoComponent,
    DetalhesComponent,
    ListaComponent,
    FinalizarPedidoComponent
  ],
  imports: [
    PedidoRoutingModule,
    CommonModule
  ]
})
export class PedidoModule { }
