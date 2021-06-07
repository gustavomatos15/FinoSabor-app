import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { MudarSenha } from '../models/MudarSenha';
import { Usuario } from '../models/Usuario';
import { BaseService } from 'src/app/shared/services/base.service';
import { cepconsulta } from '../models/CepConsulta';

@Injectable({
    providedIn: 'root'
  })
export class GerenciarService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    mudarSenha(mudarSenha: MudarSenha): Observable<any> {
        let response = this.http
            .post(this.UrlServiceV1 + 'Perfil/MudarSenha', mudarSenha, this.ObterAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    obterUsuario(): Observable<Usuario> {
        return this.http
            .get<Usuario>(this.UrlServiceV1 + "Perfil", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    editarPerfil(usuario: Usuario): Observable<any> {
        let response = this.http
            .put(this.UrlServiceV1 + 'Perfil', usuario, this.ObterAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

  consultarCep(cep: string): Observable<cepconsulta> {
        return this.http
          .get<cepconsulta>(`https://viacep.com.br/ws/${cep}/json/`)
            .pipe(catchError(super.serviceError))
    }

}
