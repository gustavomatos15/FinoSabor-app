import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarAppComponent } from './gerenciar.app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';

const gerenciarRouterConfig: Routes = [
  {
      path:'', component: GerenciarAppComponent,
      children:[
          { path:'perfil', component: PerfilComponent },
          { path:'trocar-senha', component: TrocarSenhaComponent },

      ]
      
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(gerenciarRouterConfig)
    ],
    exports: [RouterModule]
})
export class GerenciarRoutingModule { }