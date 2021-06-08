import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Registrar } from '../../autenticacao/models/Registrar';
import { ResetSenha } from '../models/reset-senha';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable()
export class ContaService extends BaseService {

    constructor(private http: HttpClient) { super(); }


    esqueceSenha(email: string): Observable<Registrar> {
        let response = this.http
            .post(this.UrlServiceV1 + `Conta/EsqueceuSenha?email=${email}`, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }


    resetSenha(resetSenha: ResetSenha): Observable<ResetSenha> {
        let response = this.http
            .post(this.UrlServiceV1 + 'Conta/ResetSenha', resetSenha, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }



}
