import { ItensPedido } from "./itens-pedido";

export class Pedido {
  constructor(
    public itens: ItensPedido[] = [],
    public total: number = 0,
    public forma_pagamento: number = 0
  ) {}
}
