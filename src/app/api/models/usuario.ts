/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
export interface Usuario {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  emailUsuario?: string;
  enabled?: boolean;
  idUsuario?: number;
  password?: string;
  role?: string;
  senhaUsuario?: string;
  username?: string;
}
