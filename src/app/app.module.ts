import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutenticacaoModule } from './Acesso/autenticacao/autenticacao.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    AutenticacaoModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
