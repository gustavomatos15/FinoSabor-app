import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/navegacao/models/Produto';
import { CarrinhoUtil } from 'src/app/shared/utils/carrinho.util';
import { environment } from 'src/environments/environment';
import { NavegacaoService } from '../services/navegacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Produto[];
  public UrlImagem: string = environment.imagensurl;

  constructor(private readonly toastr: ToastrService,
    private protudoService: NavegacaoService) {

      this.protudoService.obterProdutos().subscribe(

        produtos => this.produtos = produtos 

      );

     }

  ngOnInit(): void {
    
  }

 }
