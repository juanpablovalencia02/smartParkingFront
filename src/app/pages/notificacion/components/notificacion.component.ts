import { Component, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ActividadMateriaModel } from '@models/actividad-materia.model';
// import { ActividadModel } from '@models/actividad.model';
// import { EvidenciaActividadModel } from '@models/evidencia-actividad.model';
import { FormCustomMessagesModel } from '@models/form-custom-messages.model';
import { NotificacionModel } from '@models/notificacion.model';
// import { ActividadService } from '@services/actividad.service';
import { CoreService } from '@services/core.service';
// import { EvidenciaActividadService } from '@services/evidencia-actividad.service';
import { NotificacionService } from '@services/notificacion.service';
// import { TipoActividadService } from '@services/tipo-actividad.service';
import { EventEmitter } from 'events';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  // **************Evidencia********************* //
  formEvidencia: FormGroup;
  erroresRespuesta: FormCustomMessagesModel;
  erroresArchivo: FormCustomMessagesModel;
  private files: FileList;
  @Output() cancel = new EventEmitter();
  // ***************************************** //
  notificacion: any[] = [];
  // modalRef: BsModalRef;
  alerts: any[] = [];
  persona: any;
  actividad: any;
  mensaje: any;
  showModalNotificacion = false;
  // actividadNoti: ActividadModel;
  notifi: {};
  constructor(
    private formBuilder: FormBuilder,
    private notificacionService: NotificacionService,
    // private evidenciaActividadService: EvidenciaActividadService,
    // private modalService: BsModalService,
    // private actividadService: ActividadService,
    private _coreService: CoreService,
    // private _tipoActividadService: TipoActividadService,
    private _router: Router
  ) { }

  traerNotificaciones() {
    this.notificacion = [];
    this.notificacionService.traerNotificaciones()
      .subscribe(notificacion => {
        console.log(notificacion, 'not');

        this.notificacion = notificacion;
        notificacion.forEach((value) => {
          if (value.metadataInfo != null) {

            this.actividad = JSON.parse(value.metadataInfo);


          }
          // console.log(this.actividad, 'la acctividad');
        }
        );

        // this.actividad=JSON.parse(notificacion.metadataInfo);

      },
        error => {
          this.alerts.push({
            type: 'danger',
            msg: 'Error de conexión',
            timeout: 5000,
            msgStr: 'Ups!'
          });
        });
  }

  openModal(template: TemplateRef<any>, notificacion: NotificacionModel) {

    // const actividadMateria: ActividadMateriaModel = JSON.parse(notificacion.metadataInfo);
    this.mensaje = notificacion;
    this.showModalNotificacion = true;

    if (notificacion.estado.estado === 'ACTIVO') {
      this.actualizarEstado(notificacion);

    }

    // this._tipoActividadService.getByActividad(actividadMateria.idActividad).subscribe(tipoActividad => {
    //   if (tipoActividad.tipoActividad.toLocaleLowerCase() === "cuestionario") {
    //     this._router.navigate(['/admin/plantilla/cuestionario/responder', actividadMateria.id]);
    //   } else {
    //     this.ActividadById(id)
    //     // console.log(estado, 'bien chick',this.actividad.id);
    //     this.modalRef = this.modalService.show(template);
    //   }
    // });
  }

  ngOnInit(): void {

    this.initForm();
    this.traerNotificaciones();
    this._coreService.persona.subscribe(persona => {
      this.persona = persona;
      console.log(persona, 'persona');
    });
  }

  private initForm() {
    this.formEvidencia = this.formBuilder.group({

      // idActividadesMateria: [null, [Validators.required]],
      respuestaText: [null, [Validators.required]],
      archivo: [null, [Validators.required]],

    });

    // this.erroresRespuesta = {
    //   control: this.formEvidencia.controls['respuestaText'],
    //   errors: {
    //     'required': "El titulo de la actividad es requerido"
    //   },
    //   success: "El titulo es valido"
    // }
  }


  onChangeFile(files: FileList) {
    this.files = files;
  }

  get nameDocumentoActividad() {
    if (this.files && this.files[0]) {
      return this.files[0].name;
    }

    return "seleccione un archivo";
  }

  cancelar() {
    this.formEvidencia.reset();
    // this.cancel.emit();
  }

  actualizarEstado(notificacion: NotificacionModel) {

    this.notificacionService.actualizarEstado(notificacion.id)
      .subscribe(estadoUpdate => {
        this.traerNotificaciones();
        console.log(estadoUpdate, 'estado update')
      },
        error => {
          console.log(error, 'error');
          // this.alerts.push({
          //   type: 'danger',
          //   msg: 'La actualización no pudo completarce',
          //   timeout: 2000,
          //   msgStr: 'Ups!'
          // });
        });
  }

  // traer actividad por id
  // ActividadById(id: number) {
  //   // this.persona =null;

  //   this.actividadService.activityById(id)
  //     .subscribe((actividad: ActividadModel) => {

  //       this.actividadNoti = actividad;
  //       console.log(this.actividadNoti, 'actividad por id');
  //     },
  //       error => {
  //         this.alerts.push({
  //           type: 'danger',
  //           msg: 'Error de conexion',
  //           timeout: 5000,
  //           msgStr: 'Ups!'
  //         });
  //       });
  // }

  // guardar evidencia
  guardar() {
    this.formEvidencia.markAllAsTouched()
    if (this.formEvidencia.invalid) {
      return;
    }

    // const evidencia: EvidenciaActividadModel = this.formEvidencia.value;
    // evidencia.idActividadesMateria = this.actividad.id;

    // this.evidenciaActividadService.createEvidence(evidencia, this.files).subscribe(res => {
    //   console.log(res, 'respuesta');



    // })
  }
}
