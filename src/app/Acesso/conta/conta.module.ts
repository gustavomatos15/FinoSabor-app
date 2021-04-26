import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';
import { ContaAppComponent } from './conta.app.component';
import { ContaRoutingModule } from './conta.route';
import { ContaService } from './services/conta.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';



@NgModule({
  declarations: [
    ContaAppComponent,
    ConfirmarEmailComponent, 
    EsqueceuSenhaComponent, 
    ResetSenhaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
