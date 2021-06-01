import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/shared/utils/localstorage';

@Component({
  selector: 'app-cabecalho-login',
  templateUrl: './cabecalho-login.component.html',
  styleUrls: ['./cabecalho-login.component.css']
})
export class CabecalhoLoginComponent {

  token: string = "";
  user: any;
  nome: string = "";
  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) {  }

  usuarioLogado(): boolean {
    this.token = this.localStorageUtils.obterTokenUsuario();
    this.user = this.localStorageUtils.obterUsuario();

    if (this.user)
      this.nome = this.toAbridged(this.user.nome);

    return this.token !== null;
  }

  toAbridged(fullName) { 
    const lastName= ' ' +fullName.split(' ').slice(-1).join(' ');
    const token = '.';
    const separator = ' ';
    const names = this.removePrepositions(fullName.replace(lastName, '')).split(separator);
    const firstName = names[0];
    let surnames = '';
    names
        .filter((name, index) => index)
        .map(name => surnames += `${separator}${name.charAt()}${token}`);
    return `${firstName}${surnames.toUpperCase()}${lastName}`;
}

removePrepositions(fullName) {
    return fullName.replace(/\ dos|\ das|\ da|\ dos|\ das|\ de|\ d\'/gi, '');
}

  logout() {
    this.localStorageUtils.limparDadosLocaisUsuario();
    this.router.navigate(['']);
  }

}
