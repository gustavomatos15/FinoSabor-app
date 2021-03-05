import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AutenticacaoAppComponent } from './autenticacao.app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoRoutingModule } from './autenticacao.route';
import { AutenticaoService } from './services/autenticacao.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NavegacaoModule } from 'src/app/navegacao/navegacao.module';



@NgModule({
  declarations: [
    AutenticacaoAppComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AutenticacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    NavegacaoModule
  ],
  providers: [
    AutenticaoService
  ]
})
export class AutenticacaoModule { }
