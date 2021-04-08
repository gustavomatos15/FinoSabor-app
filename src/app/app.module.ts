import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutenticacaoModule } from './Acesso/autenticacao/autenticacao.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    AutenticacaoModule,
    ProdutoModule,
    PedidoModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
