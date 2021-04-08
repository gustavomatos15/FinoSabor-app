import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListaComponent } from './lista/lista.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoAppComponent } from './produto.app.component';



@NgModule({
  declarations: [
    ProdutoAppComponent,
    DetalhesComponent,
    BuscarComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
