import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CarregamentoComponent } from './carregamento/carregamento.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [HomeComponent, RodapeComponent, CabecalhoComponent, CarregamentoComponent, Error404Component],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    RodapeComponent,
    CabecalhoComponent,
    CarregamentoComponent,
    Error404Component]
})
export class NavegacaoModule { }