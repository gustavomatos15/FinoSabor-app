import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {


  public UrlImagem: string = environment.imagensurl;
  pedido: Pedido;

  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.pedido = this.route.snapshot.data['pedido'];

    if (this.pedido == null) this.router.navigate(['/pedidos/lista']);
  }

  ToDateTime(datetime) {

    const date = datetime.split('T');

    return date[0].replaceAll('-', '/') + ' - ' + date[1].substring(0, 5);

  }
}
