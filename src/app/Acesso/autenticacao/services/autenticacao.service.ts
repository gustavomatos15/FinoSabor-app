import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from '../../../../services/base.service';

@Injectable()
export class AutenticaoService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    registrarUsuario(usuario: Usuario): Observable<Usuario> {
        let response = this.http
            .post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }
ng

    login(usuario: Usuario): Observable<Usuario> {
        let response = this.http
            .post(this.UrlServiceV1 + 'autenticar', usuario, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    refreshToken(): Observable<Usuario> {
        let response = this.http
            .post(`${this.UrlServiceV1}refresh-token?refreshToken=${this.getRefreshToken()}`, null, this.ObterAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    private getRefreshToken() {
        return this.LocalStorage.obterUsuario().refreshToken;
    }

}