import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivationCompanyUserModel } from '@models/activation-company-user.model';
import { CoreService } from '@services/core.service';
import { UINotificationService } from '@services/uinotification.service';

const KEY_CODE_ENTER = 13

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  activationCompanyUsers: ActivationCompanyUserModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _coreService: CoreService,
    private router: Router,
    private _uiNotificationService: UINotificationService
  ) {
    this._coreService.logout();
    this.buildFormLogin();
  }

  ngOnInit(): void { }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get usuarioField() {
    return this.formLogin.get('usuario');
  }
  get passwordField() {
    return this.formLogin.get('password');
  }

  onEnter(event) {
    if (event.keyCode === KEY_CODE_ENTER) {
      this.login()
    }
  }

  selectCompany(idActivationUser: number) {
    this._coreService.post<any>('user_company/' + idActivationUser).subscribe(res => {
      this.router.navigate(['dashboard'])
    });
  }

  login() {
    if (this.formLogin.valid) {
      this._coreService.login(
        this.formLogin.get('usuario').value,
        this.formLogin.get('password').value,
        (response: ActivationCompanyUserModel[]) => {
          if (response.length === 1) {
            this.selectCompany(response[0].id);
          } else if (response.length > 1) {
            this.activationCompanyUsers = response;
          }
          this._uiNotificationService.clearAll()
          this._uiNotificationService.success("Inicio de session correcto")
        },
        (e) => {
          if (e.status === 401) {
            this._uiNotificationService.clearAll()
            this._uiNotificationService.error("Usuario o contraseña invalida")
          }
        }
      )
    }
  }

  get showListCompanies() {
    return this.activationCompanyUsers.length > 1
  }

}
