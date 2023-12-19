import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaModel } from '@models/empresa.model';
import { RolModel } from '@models/rol.model';
import { EmpresaService } from '@services/empresa.service';
import { UINotificationService } from '@services/uinotification.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @Input() rol: RolModel;//actualizar

  @Output() store: EventEmitter<RolModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formRol: FormGroup;
  objEmpresa: EmpresaModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private _uiNotificationService: UINotificationService
  ) {
    this.rol = {
      id: null,
      name: '',
      guard_name: '',
      idCompany: null

    };
    this.buildForm();
  }

  ngOnInit(): void {
    this.traerEmpresas();
    this.setRol()
  }

  traerEmpresas() {
    this.empresaService.traerEmpresas()
      .subscribe((empresa: EmpresaModel[]) => {
        this.objEmpresa = empresa;
      }, error => {
        this._uiNotificationService.error('Error de conexión');
      });
  }

  get nombreRolField() {
    return this.formRol.get('name');
  }

  get idCompany() {
    return this.formRol.get('idCompany');
  }

  setRol() {
    if (this.rol) {
      this.formRol.patchValue({
        name: this.rol.name,
        idCompany: this.rol.idCompany
      })
    }
  }

  private buildForm() {
    this.formRol = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required]],
      idCompany: ['', [Validators.required]],
    });

    this.formRol.valueChanges
      .pipe(
        debounceTime(350),
      )
      .subscribe(data => {
      });
  }

  guardarRol() {
    this.store.emit(this.getRol());
  }

  closeModal() {
    this.cancel.emit();
  }

  private getControl(name: string) {
    return this.formRol.controls[name];
  }

  getRol(): RolModel {
    return {
      id: this.rol?.id,
      idCompany: this.getControl('idCompany').value,
      name: this.getControl('name').value
    }
  }

}
