import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';



@NgModule({
  declarations: [ConfirmarEmailComponent, EsqueceuSenhaComponent, ResetSenhaComponent],
  imports: [
    CommonModule
  ]
})
export class ContaModule { }
