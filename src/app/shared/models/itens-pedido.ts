
export class ItensPedido {
    constructor(
        public quantidade: number,
        public id_produto: string,

        public nome: string,
        public preco: number,
        public slug: string,
        public imagem_principal: string
    ) {}
  }
  