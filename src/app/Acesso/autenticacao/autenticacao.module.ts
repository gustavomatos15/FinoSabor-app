import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AutenticacaoRoutingModule } from './autenticacao.route';
import { AutenticacaoAppComponent } from './autenticacao.app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators'
import { RegistrarComponent } from './registrar/registrar.component';
import { NavegacaoModule } from 'src/app/navegacao/navegacao.module';
import { AutenticaoService } from './services/autenticacao.service';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';



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
