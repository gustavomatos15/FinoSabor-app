import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoAppComponent } from './produto.app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

@NgModule({
  declarations: [
    ProdutoAppComponent,
    DetalhesComponent,
    CategoriaComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ProdutoListaComponent
  ]
})
export class ProdutoModule { }
