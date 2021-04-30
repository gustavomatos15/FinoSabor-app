import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/Pedido';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public pedidos: Pedido[];
  public UrlImagem: string = environment.imagensurl;
 
  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.obterPedidos()
      .subscribe(
       pedidos=> this.pedidos = pedidos
      )
  }

}
