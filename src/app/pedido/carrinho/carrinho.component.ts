import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido';
import { CarrinhoUtil } from 'src/app/shared/utils/carrinho.util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public UrlImagem: string = environment.imagensurl;
  carrinho: Pedido;

  constructor() { }

  ngOnInit(): void {
    this.carrinho =  CarrinhoUtil.get();
  }

  

}
