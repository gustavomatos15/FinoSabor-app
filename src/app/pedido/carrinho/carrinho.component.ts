import { Component, OnInit } from '@angular/core';
import { ItensPedido } from 'src/app/shared/models/itens-pedido';
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
    this.carrinho = CarrinhoUtil.get();
  }

  remover(item) {

    this.carrinho.itens.splice(item, 1);

    CarrinhoUtil.update(this.carrinho);
  }

  addItem(produto: ItensPedido) {
    let cart = CarrinhoUtil.get();
    let position = cart.itens.findIndex(x => x.id_produto == produto.id_produto);
    if (position != -1)
      cart.itens[position].quantidade++;

    CarrinhoUtil.update(cart);
    this.carrinho = cart;
  }


  removeItem(produto: ItensPedido) {
    if (produto.quantidade > 1) {
      let cart = CarrinhoUtil.get();
      let position = cart.itens.findIndex(x => x.id_produto == produto.id_produto);
      if (position != -1)
        cart.itens[position].quantidade--;

      CarrinhoUtil.update(cart);
      this.carrinho = cart;
    }
  }

}
