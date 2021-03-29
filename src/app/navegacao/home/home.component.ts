import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { NavegacaoService } from '../services/navegacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Produto[];
 
  constructor(private categoriaservice: NavegacaoService) {}

  ngOnInit(): void {
    this.categoriaservice.obterProdutos()
      .subscribe(
       produtos=> this.produtos = produtos
      )
  }

}
