/* tslint:disable */
/* eslint-disable */
import { Livro } from './livro';
import { Pessoa } from './pessoa';
export interface Emprestimo {
  dataDevolucao?: string;
  dataEmprestimo?: string;
  idEmprestimo?: number;
  livro?: Livro;
  pessoa?: Pessoa;
}
