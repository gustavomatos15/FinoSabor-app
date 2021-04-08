import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from '../pedido/detalhes/detalhes.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListaComponent } from './lista/lista.component';
import { ProdutoAppComponent } from './produto.app.component';

const produtoRouterConfig: Routes = [
  {
    path: '', component: ProdutoAppComponent,
    children: [
      { path: 'buscar', component: BuscarComponent },
      { path: 'detalhes', component: DetalhesComponent },
      { path: 'lista', component: ListaComponent },

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
