import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/navegacao/models/Produto';
import { CarrinhoUtil } from 'src/app/shared/utils/carrinho.util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  @Input() produto: Produto;

  public UrlImagem: string = environment.imagensurl;
  
  constructor(private readonly toastr: ToastrService) {}

  ngOnInit(): void {

  }


  addToCarrinho(): void {
    let index = CarrinhoUtil.get().itens.findIndex(val => val.id_produto == this.produto.id);
    if (index < 0) {


      CarrinhoUtil.add(
        1,
        this.produto.id,
        this.produto.nome,
        this.produto.valor,
        this.produto.slug,
        this.produto.imagem_principal

      );
    }

    this.toastr.success(
      `${this.produto.nome} adicionado ao carrinho`,
      'Produto Adicionado',
    );
    
  }






}
