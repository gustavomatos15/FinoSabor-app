import { Itens_Pedido } from "./Itens_Pedido";

export interface Pedido {
    id: string;
    data_pedido: string;
    status: number;
    forma_pagamento: number;
    total: number;
    id_usuario: string;
    itens: Itens_Pedido[];
}