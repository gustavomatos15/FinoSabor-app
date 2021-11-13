import { CarrinhoModel } from "../models/carrinho-model";
import { ItensPedido } from "../models/itens-pedido";


const _CART = 'finosaborcarrinho';

export class CarrinhoUtil {
  public static get(): CarrinhoModel {
    const data = localStorage.getItem(_CART);

    if (!data) {
      return new CarrinhoModel();
    }

    return JSON.parse(data);
  }

  
  public static add(
    quantidade: number,
    id_produto: string,

    nomeProduto: string,
    valor_unitario: number,
    slug: string,
    imagem_principal: string,
  ) {
    const cart = this.get();

    const item = new ItensPedido(quantidade, id_produto, nomeProduto, valor_unitario, slug, imagem_principal,0);
    cart.itens.push(item);

    localStorage.setItem(_CART, JSON.stringify(cart));
  }

  public static update(cart: CarrinhoModel) {
    localStorage.setItem(_CART, JSON.stringify(cart));
  }

  public static clear() {
    localStorage.removeItem(_CART);
  }
}
