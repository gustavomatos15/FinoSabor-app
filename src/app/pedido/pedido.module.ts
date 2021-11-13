import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from './lista/lista.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { PedidoAppComponent } from './pedido.app.component';
import { PedidoRoutingModule } from './pedido.route';
import { PerfilEditarComponent } from '../Acesso/gerenciar/perfil-editar/perfil-editar.component';
import { GerenciarModule } from '../Acesso/gerenciar/gerenciar.module';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule,
    GerenciarModule
  ],
  exports:[
    GerenciarModule
  ]
})
export class PedidoModule { }
