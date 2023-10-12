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

import { Emprestimo } from '../models/emprestimo';
import { EmprestimoDto } from '../models/emprestimo-dto';
import { EmprestimoListaDto } from '../models/emprestimo-lista-dto';

@Injectable({
  providedIn: 'root',
})
export class EmprestimoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation devolucao
   */
  static readonly DevolucaoPath = '/api/v1/livro/devolucao/{id}';

  /**
   * Método utilizado para finalizar um emprestimo.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devolucao()` instead.
   *
   * This method doesn't expect any request body.
   */
  devolucao$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EmprestimoDto>> {

    const rb = new RequestBuilder(this.rootUrl, EmprestimoControllerService.DevolucaoPath, 'put');
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
        return r as StrictHttpResponse<EmprestimoDto>;
      })
    );
  }

  /**
   * Método utilizado para finalizar um emprestimo.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `devolucao$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  devolucao(params: {
    id: number;
  },
  context?: HttpContext

): Observable<EmprestimoDto> {

    return this.devolucao$Response(params,context).pipe(
      map((r: StrictHttpResponse<EmprestimoDto>) => r.body as EmprestimoDto)
    );
  }

  /**
   * Path part for operation excluirEmprestimo
   */
  static readonly ExcluirEmprestimoPath = '/api/v1/livro/excluirEmprestimo/{id}';

  /**
   * Método utilizado para deletar registro do emprestimo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `excluirEmprestimo()` instead.
   *
   * This method doesn't expect any request body.
   */
  excluirEmprestimo$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Emprestimo>> {

    const rb = new RequestBuilder(this.rootUrl, EmprestimoControllerService.ExcluirEmprestimoPath, 'post');
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
        return r as StrictHttpResponse<Emprestimo>;
      })
    );
  }

  /**
   * Método utilizado para deletar registro do emprestimo
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `excluirEmprestimo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  excluirEmprestimo(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Emprestimo> {

    return this.excluirEmprestimo$Response(params,context).pipe(
      map((r: StrictHttpResponse<Emprestimo>) => r.body as Emprestimo)
    );
  }

  /**
   * Path part for operation emprestar
   */
  static readonly EmprestarPath = '/api/v1/livro/emprestar';

  /**
   * Emprestar livro.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `emprestar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  emprestar$Response(params: {
    body: EmprestimoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EmprestimoDto>> {

    const rb = new RequestBuilder(this.rootUrl, EmprestimoControllerService.EmprestarPath, 'post');
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
        return r as StrictHttpResponse<EmprestimoDto>;
      })
    );
  }

  /**
   * Emprestar livro.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `emprestar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  emprestar(params: {
    body: EmprestimoDto
  },
  context?: HttpContext

): Observable<EmprestimoDto> {

    return this.emprestar$Response(params,context).pipe(
      map((r: StrictHttpResponse<EmprestimoDto>) => r.body as EmprestimoDto)
    );
  }

  /**
   * Path part for operation verificarEmprestimoAtivo
   */
  static readonly VerificarEmprestimoAtivoPath = '/api/v1/livro/verificarEmprestimoAtivo/{livroId}';

  /**
   * Verificar se o livro possui empréstimo ativo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verificarEmprestimoAtivo()` instead.
   *
   * This method doesn't expect any request body.
   */
  verificarEmprestimoAtivo$Response(params: {
    livroId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, EmprestimoControllerService.VerificarEmprestimoAtivoPath, 'get');
    if (params) {
      rb.path('livroId', params.livroId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Verificar se o livro possui empréstimo ativo
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `verificarEmprestimoAtivo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verificarEmprestimoAtivo(params: {
    livroId: number;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.verificarEmprestimoAtivo$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation listarEmprestimosFinalizados
   */
  static readonly ListarEmprestimosFinalizadosPath = '/api/v1/livro/finalizados';

  /**
   * Listar empréstimos finalizados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarEmprestimosFinalizados()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEmprestimosFinalizados$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EmprestimoListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EmprestimoControllerService.ListarEmprestimosFinalizadosPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmprestimoListaDto>>;
      })
    );
  }

  /**
   * Listar empréstimos finalizados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listarEmprestimosFinalizados$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEmprestimosFinalizados(params?: {
  },
  context?: HttpContext

): Observable<Array<EmprestimoListaDto>> {

    return this.listarEmprestimosFinalizados$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EmprestimoListaDto>>) => r.body as Array<EmprestimoListaDto>)
    );
  }

  /**
   * Path part for operation listarEmprestimosAtivos
   */
  static readonly ListarEmprestimosAtivosPath = '/api/v1/livro/ativos';

  /**
   * Listar empréstimos ativos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarEmprestimosAtivos()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEmprestimosAtivos$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EmprestimoListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EmprestimoControllerService.ListarEmprestimosAtivosPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmprestimoListaDto>>;
      })
    );
  }

  /**
   * Listar empréstimos ativos
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listarEmprestimosAtivos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEmprestimosAtivos(params?: {
  },
  context?: HttpContext

): Observable<Array<EmprestimoListaDto>> {

    return this.listarEmprestimosAtivos$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EmprestimoListaDto>>) => r.body as Array<EmprestimoListaDto>)
    );
  }

  /**
   * Path part for operation listarEmprestimosAtivosDaPessoa
   */
  static readonly ListarEmprestimosAtivosDaPessoaPath = '/api/v1/livro/ativosDePessoa/{id}';

  /**
   * Listar empréstimos ativos de uma pessoa
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarEmprestimosAtivosDaPessoa()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEmprestimosAtivosDaPessoa$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EmprestimoListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EmprestimoControllerService.ListarEmprestimosAtivosDaPessoaPath, 'get');
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
        return r as StrictHttpResponse<Array<EmprestimoListaDto>>;
      })
    );
  }

  /**
   * Listar empréstimos ativos de uma pessoa
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listarEmprestimosAtivosDaPessoa$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEmprestimosAtivosDaPessoa(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<EmprestimoListaDto>> {

    return this.listarEmprestimosAtivosDaPessoa$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EmprestimoListaDto>>) => r.body as Array<EmprestimoListaDto>)
    );
  }

}
