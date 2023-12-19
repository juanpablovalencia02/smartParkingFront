import { EstadoModel } from "./estado.model";
import { PersonaModel } from "./persona.model";

export interface TipoNotificacion {
  id: number;
  tipoNotificacion: string;
  observacion: string;
}

export interface NotificacionModel {

  id?: number;
  fecha?: string;
  hora?: string;
  asunto: Text;
  idestado?: number;
  idpersonaReceptor?: number;
  idpersonaRemitente?: number;
  mensaje: Text;
  metadatainfo: Text;
  idTipoIdentificacion: number;

  estado?: EstadoModel

  idTipoNotificacion?: number;

  metadataInfo: string;
  personaReceptor?: PersonaModel;
  personaRemitente?: PersonaModel;
  tipoNotificacion?: TipoNotificacion;
}