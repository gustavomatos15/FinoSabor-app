import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";

import { LocalStorageUtils } from '../utils/localstorage';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router,
        public loaderService: LoaderService) { }

    localStorageUtil = new LocalStorageUtils();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loaderService.isLoading.next(true);

        return next.handle(req).pipe(

            finalize(
                () => {
                    this.loaderService.isLoading.next(false);
                }
            ),

            catchError(error => {

                if (error instanceof HttpErrorResponse) {

                    if (error.status === 401) {
                        this.localStorageUtil.limparDadosLocaisUsuario();
                        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
                    }
                    if (error.status === 403) {
                        this.router.navigate(['/acesso-negado']);
                    }
                }

                return throwError(error);
            }));
    }

}