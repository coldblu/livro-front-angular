/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
import { Pessoa } from './pessoa';
export interface Usuario {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  emailUsuario?: string;
  enabled?: boolean;
  idUsuario?: number;
  password?: string;
  pessoa?: Pessoa;
  role?: string;
  senhaUsuario?: string;
  username?: string;
}
