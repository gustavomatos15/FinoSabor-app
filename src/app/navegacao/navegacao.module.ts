import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';



@NgModule({
  declarations: [HomeComponent, RodapeComponent, CabecalhoComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, RodapeComponent, CabecalhoComponent]
})
export class NavegacaoModule { }
