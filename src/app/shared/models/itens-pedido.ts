
export class ItensPedido {
    constructor(
        public quantidade: number,
        public id_produto: string,
        public nomeProduto: string,
        public valor_unitario: number,

        public slug: string,
        public imagem_principal: string,

        public valor_item: number
    ) {}
  }
  