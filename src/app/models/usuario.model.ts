import { RolModel } from "./rol.model";

export interface UsuarioModel {
  id: number;
  email: string;
  contrasena: string;
  company_id?: number;
  roles?: RolModel[];
}
