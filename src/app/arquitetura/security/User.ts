/**
 * Interface com a representação de 'Usuário'.
 *
 * @author Guiliano Rangel (UEG)
 */
export interface User {
  id: number;
  login: string;
  pessoaId: number;
  pessoaNome: string;
  roles?: string[];
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
