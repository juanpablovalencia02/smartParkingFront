import { DepartamentoModel } from './departamento.model';

export interface CiudadModel {
  id: number;
  codigo: string;
  descripcion: string;
  iddepartamento ?: number;

  departamento ?: DepartamentoModel;
}
