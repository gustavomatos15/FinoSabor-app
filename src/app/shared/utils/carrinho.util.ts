import { ItensPedido } from "../models/itens-pedido";
import { Pedido } from "../models/pedido";


const _CART = 'finosaborcarrinho';

export class CarrinhoUtil {
  public static get(): Pedido {
    const data = localStorage.getItem(_CART);

    if (!data) {
      return new Pedido();
    }

    return JSON.parse(data);
  }

  
  public static add(
    quantidade: number,
    id_produto: string,

    nome: string,
    preco: number,
    slug: string,
    imagem_principal: string,
  ) {
    const cart = this.get();

    const item = new ItensPedido(quantidade, id_produto, nome, preco, slug, imagem_principal);
    cart.itens.push(item);

    localStorage.setItem(_CART, JSON.stringify(cart));
  }

  public static update(cart: Pedido) {
    localStorage.setItem(_CART, JSON.stringify(cart));
  }

  public static clear() {
    localStorage.removeItem(_CART);
  }
}
