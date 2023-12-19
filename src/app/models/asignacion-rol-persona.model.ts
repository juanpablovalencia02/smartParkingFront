import { CiudadModel } from './ciudad.model';
import { EstadoModel } from './estado.model';
import { TipoIdentificacionModel } from './tipo-identificacion.model';

export interface AsignacionRolPersonaModel {
    id?: number;

    estado?: EstadoModel
}