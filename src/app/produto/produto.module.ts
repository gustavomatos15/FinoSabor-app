import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListaComponent } from './lista/lista.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoService } from './services/produto.service';
import { ProdutoResolve } from './services/produto.resolve';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [
    ProdutoAppComponent,
    DetalhesComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
