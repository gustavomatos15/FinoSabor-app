import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
<<<<<<< HEAD
import { MudarSenha } from '../models/MudarSenha';
import { Usuario } from '../models/Usuario';
import { CepConsulta } from '../models/CepConsulta';
import { BaseService } from 'src/app/shared/services/base.service';
=======
import { BaseService } from '../../../services/base.service';
import { MudarSenha } from '../models/MudarSenha';
import { Usuario } from '../models/Usuario';
>>>>>>> 0ea2fe50f7358c0539228942fe9d08589835db4b

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
<<<<<<< HEAD

    consultarCep(cep: string): Observable<CepConsulta> {
        return this.http
            .get<CepConsulta>(`https://viacep.com.br/ws/${cep}/json/`)
            .pipe(catchError(super.serviceError))
    }
=======
>>>>>>> 0ea2fe50f7358c0539228942fe9d08589835db4b

}
