import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { ContatoComponent } from './contato/contato.component';



@NgModule({
  declarations: [
    SobreNosComponent,
    CookiesComponent,
    PoliticaPrivacidadeComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpresaModule { }
