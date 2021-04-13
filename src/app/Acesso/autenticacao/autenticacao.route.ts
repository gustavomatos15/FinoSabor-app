import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoAppComponent } from './autenticacao.app.component';
import { RegistrarComponent } from './registrar/registrar.component';

import { LoginComponent } from './login/login.component';

const authRouterConfig: Routes = [
  {
      path:'', component:AutenticacaoAppComponent,
      children:[
          { path:'registrar', component:RegistrarComponent },
          { path:'login', component:LoginComponent },

      ]
      
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRouterConfig)
    ],
    exports: [RouterModule]
})
export class AutenticacaoRoutingModule { }