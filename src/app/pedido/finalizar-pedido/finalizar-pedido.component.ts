import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarrinhoModel } from 'src/app/shared/models/carrinho-model';
import { CarrinhoUtil } from 'src/app/shared/utils/carrinho.util';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/Pedido';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  errors: any[] = [];
  public UrlImagem: string = environment.imagensurl;
  pedido: Pedido;
  carrinho: CarrinhoModel;
  forma_pagamento: string;
  
  constructor(private pedidoService: PedidoService,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit(): void {
    this.carrinho = CarrinhoUtil.get();
    this.carrinho.total = this.carrinho.itens.reduce((total, produto) => total + produto.valor_unitario*produto.quantidade, 0);
  

  }

  finalizar(){
    this.carrinho.forma_pagamento = parseInt(this.forma_pagamento);
     this.pedidoService.enviarPedido(this.carrinho)
    .subscribe(
      sucesso => { this.processarSucesso(sucesso) },
      falha => { this.processarFalha(falha) }
    );
  }

  processarSucesso(response: any) {
    this.errors = [];

    CarrinhoUtil.clear();
    
    this.router.navigate(['/pedidos/detalhes/'+response.value.id]);

    this.toastr.success('Alerações feitas com sucesso', 'Sucesso');

  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }

}
