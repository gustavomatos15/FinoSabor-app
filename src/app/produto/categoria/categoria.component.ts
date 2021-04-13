import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Produto } from '../../navegacao/models/Produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  UrlImagem: string = environment.imagensurl;
  produtos: Produto[];

  constructor(private activatedRouteoute: ActivatedRoute,
    private protudoService: ProdutoService) {
  }
  ngOnInit() {

    this.activatedRouteoute.params.pipe(
      switchMap((param) => this.protudoService.obterPorSlugCategoria(param.slug)))
    .subscribe(produtos => this.produtos = produtos);

    /*let slug = '';
    this.activatedRouteoute.params
      .pipe()
      .subscribe((param) => (slug = param.slug));

      console.log(this.activatedRouteoute.snapshot.params.slug);
      this.protudoService.obterPorSlugCategoria(this.activatedRouteoute.snapshot.params.slug)
      .subscribe(
       produtos=> this.produtos = produtos
      )*/
  }

}
