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



@NgModule({
  declarations: [
    GerenciarAppComponent,
    TrocarSenhaComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GerenciarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
  ],
  providers: [
    GerenciarService
  ]
})
export class GerenciarModule { }
