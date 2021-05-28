import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Produto } from '../../navegacao/models/Produto';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent {

  public UrlImagem: string = environment.imagensurl;
  produto: Produto;

  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.produto = this.route.snapshot.data['produto'];

    if (this.produto == null) this.router.navigate(['']);
  }

}
