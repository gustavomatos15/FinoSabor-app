import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './navegacao/contato/contato.component';
import { Error404Component } from './navegacao/error404/error404.component';
import { HomeComponent } from './navegacao/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  {
    path: '',
    loadChildren: () => import('./Acesso/autenticacao/autenticacao.module')
      .then(a => a.AutenticacaoModule)
  },

  {
    path: 'conta',
    loadChildren: () => import('./Acesso/conta/conta.module')
      .then(a => a.ContaModule)
  },

  {
    path: 'gerenciar',
    loadChildren: () => import('./Acesso/gerenciar/gerenciar.module')
      .then(a => a.GerenciarModule)
  },

  {
    path: 'produtos',
    loadChildren: () => import('./produto/produto.module')
      .then(a => a.ProdutoModule)
  },

  {
    path: 'pedidos',
    loadChildren: () => import('./pedido/pedido.module')
      .then(a => a.PedidoModule)
  },

  { path: 'contato', component: ContatoComponent },
  { path: '**', component: Error404Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
