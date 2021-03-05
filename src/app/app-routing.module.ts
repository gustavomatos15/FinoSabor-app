import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './navegacao/error404/error404.component';
import { HomeComponent } from './navegacao/home/home.component';

const routes: Routes = [
  { path: '', 
  loadChildren:()=> import ('./Acesso/autenticacao/autenticacao.module')    
  .then(a=> a.AutenticacaoModule)
},
  { path: '', component: HomeComponent },
  { path: '**', component: Error404Component },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
