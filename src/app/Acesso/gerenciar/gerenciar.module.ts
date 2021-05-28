import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GerenciarRoutingModule } from './gerenciar.route';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';
import { GerenciarService } from './services/gerenciar.service';
import { GerenciarAppComponent } from './gerenciar.app.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilEnderecoComponent } from './perfil-endereco/perfil-endereco.component';



@NgModule({
  declarations: [
    GerenciarAppComponent,
    TrocarSenhaComponent,
    PerfilComponent,
    MenuComponent,
    PerfilEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GerenciarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
  ]
})
export class GerenciarModule { }
