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

import { Livro } from '../models/livro';
import { LivroAlteravelDto } from '../models/livro-alteravel-dto';
import { LivroDto } from '../models/livro-dto';
import { LivroListaDto } from '../models/livro-lista-dto';

@Injectable({
  providedIn: 'root',
})
export class LivroControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation alterar
   */
  static readonly AlterarPath = '/api/v1/livro/alterar';

  /**
   * Método utilizado para altlerar os dados de um livro
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar$Response(params: {
    body: LivroAlteravelDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LivroDto>> {

    const rb = new RequestBuilder(this.rootUrl, LivroControllerService.AlterarPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LivroDto>;
      })
    );
  }

  /**
   * Método utilizado para altlerar os dados de um livro
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar(params: {
    body: LivroAlteravelDto
  },
  context?: HttpContext

): Observable<LivroDto> {

    return this.alterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<LivroDto>) => r.body as LivroDto)
    );
  }

  /**
   * Path part for operation incluir
   */
  static readonly IncluirPath = '/api/v1/livro/incluir';

  /**
   * Método utilizado para realizar a inclusão de um livro
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir$Response(params: {
    body: LivroAlteravelDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LivroDto>> {

    const rb = new RequestBuilder(this.rootUrl, LivroControllerService.IncluirPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LivroDto>;
      })
    );
  }

  /**
   * Método utilizado para realizar a inclusão de um livro
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir(params: {
    body: LivroAlteravelDto
  },
  context?: HttpContext

): Observable<LivroDto> {

    return this.incluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<LivroDto>) => r.body as LivroDto)
    );
  }

  /**
   * Path part for operation excluir
   */
  static readonly ExcluirPath = '/api/v1/livro/deletar';

  /**
   * Método utilizado para deletar livro do banco de dados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `excluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  excluir$Response(params: {
    body: LivroDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Livro>> {

    const rb = new RequestBuilder(this.rootUrl, LivroControllerService.ExcluirPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Livro>;
      })
    );
  }

  /**
   * Método utilizado para deletar livro do banco de dados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `excluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  excluir(params: {
    body: LivroDto
  },
  context?: HttpContext

): Observable<Livro> {

    return this.excluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<Livro>) => r.body as Livro)
    );
  }

  /**
   * Path part for operation listAll
   */
  static readonly ListAllPath = '/api/v1/livro/listar';

  /**
   * Listagem Geral dos livros
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LivroListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LivroControllerService.ListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LivroListaDto>>;
      })
    );
  }

  /**
   * Listagem Geral dos livros
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll(params?: {
  },
  context?: HttpContext

): Observable<Array<LivroListaDto>> {

    return this.listAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LivroListaDto>>) => r.body as Array<LivroListaDto>)
    );
  }

  /**
   * Path part for operation buscar
   */
  static readonly BuscarPath = '/api/v1/livro/buscar';

  /**
   * Listagem Geral dos livros
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buscar()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscar$Response(params: {
    l: LivroDto;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LivroDto>> {

    const rb = new RequestBuilder(this.rootUrl, LivroControllerService.BuscarPath, 'get');
    if (params) {
      rb.query('l', params.l, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LivroDto>;
      })
    );
  }

  /**
   * Listagem Geral dos livros
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buscar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscar(params: {
    l: LivroDto;
  },
  context?: HttpContext

): Observable<LivroDto> {

    return this.buscar$Response(params,context).pipe(
      map((r: StrictHttpResponse<LivroDto>) => r.body as LivroDto)
    );
  }

}
