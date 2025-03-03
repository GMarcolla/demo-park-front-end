import { UserRole } from '../enumerables/UserRole';

export interface LoginResponse {
  token: string;
  role: UserRole;
}
