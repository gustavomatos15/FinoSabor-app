import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';
import { ContaAppComponent } from './conta.app.component';
import { ContaRoutingModule } from './conta.route';



@NgModule({
  declarations: [
    ContaAppComponent,
    ConfirmarEmailComponent, 
    EsqueceuSenhaComponent, 
    ResetSenhaComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule
  ]
})
export class ContaModule { }
