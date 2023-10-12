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

import { PessoaDto } from '../models/pessoa-dto';

@Injectable({
  providedIn: 'root',
})
export class PessoaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation incluirPessoa
   */
  static readonly IncluirPessoaPath = '/api/v1/pessoa/incluir_pessoa';

  /**
   * Método utilizado para cadastrar ´pessoa
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluirPessoa()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluirPessoa$Response(params: {
    body: PessoaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PessoaDto>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.IncluirPessoaPath, 'post');
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
        return r as StrictHttpResponse<PessoaDto>;
      })
    );
  }

  /**
   * Método utilizado para cadastrar ´pessoa
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluirPessoa$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluirPessoa(params: {
    body: PessoaDto
  },
  context?: HttpContext

): Observable<PessoaDto> {

    return this.incluirPessoa$Response(params,context).pipe(
      map((r: StrictHttpResponse<PessoaDto>) => r.body as PessoaDto)
    );
  }

  /**
   * Path part for operation listarTodasPessoas
   */
  static readonly ListarTodasPessoasPath = '/api/v1/pessoa/listarPessoas';

  /**
   * Lista todo mundo do mundo.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarTodasPessoas()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarTodasPessoas$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.ListarTodasPessoasPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Lista todo mundo do mundo.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listarTodasPessoas$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarTodasPessoas(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.listarTodasPessoas$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation buscarPessoa
   */
  static readonly BuscarPessoaPath = '/api/v1/pessoa/buscar_pessoa/{id}';

  /**
   * Busca pessoa
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buscarPessoa()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscarPessoa$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PessoaDto>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.BuscarPessoaPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PessoaDto>;
      })
    );
  }

  /**
   * Busca pessoa
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buscarPessoa$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscarPessoa(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PessoaDto> {

    return this.buscarPessoa$Response(params,context).pipe(
      map((r: StrictHttpResponse<PessoaDto>) => r.body as PessoaDto)
    );
  }

}
