import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from '../../../services/base.service';
import { Usuario } from '../../autenticacao/models/Usuario';

@Injectable()
export class ContaService extends BaseService {

    constructor(private http: HttpClient) { super(); }


    esqueceSenha(email: string): Observable<Usuario> {
        let response = this.http
            .post(this.UrlServiceV1 + `Conta/EsqueceuSenha?email=${email}`, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }


}
