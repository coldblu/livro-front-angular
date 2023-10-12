/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthDto } from '../models/auth-dto';
import { CadastroDto } from '../models/cadastro-dto';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/api/v1/auth/login';

  /**
   * Logar no sistema
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: {
    body: AuthDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Usuario>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthControllerService.LoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Usuario>>;
      })
    );
  }

  /**
   * Logar no sistema
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: {
    body: AuthDto
  },
  context?: HttpContext

): Observable<Array<Usuario>> {

    return this.login$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Usuario>>) => r.body as Array<Usuario>)
    );
  }

  /**
   * Path part for operation cadastro
   */
  static readonly CadastroPath = '/api/v1/auth/cadastro';

  /**
   * Cadastrar no sistema
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cadastro()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cadastro$Response(params: {
    body: CadastroDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CadastroDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthControllerService.CadastroPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CadastroDto>>;
      })
    );
  }

  /**
   * Cadastrar no sistema
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cadastro$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cadastro(params: {
    body: CadastroDto
  },
  context?: HttpContext

): Observable<Array<CadastroDto>> {

    return this.cadastro$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CadastroDto>>) => r.body as Array<CadastroDto>)
    );
  }

}
