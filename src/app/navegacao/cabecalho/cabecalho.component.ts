import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { NavegacaoService } from '../services/navegacao.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  public categorias: Categoria[];
 
  constructor(private categoriaservice: NavegacaoService) {}

  ngOnInit(): void {
    this.categoriaservice.obterCategorias()
      .subscribe(
       categorias=> this.categorias = categorias
      )
  }

}
