import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';
import { NavegacaoService } from '../services/navegacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Produto[];
  public UrlImagem: string = environment.imagensurl;
 
  constructor(private protudoService: NavegacaoService) {}

  ngOnInit(): void {
    this.protudoService.obterProdutos()
      .subscribe(
       produtos=> this.produtos = produtos
      )
  }

}
