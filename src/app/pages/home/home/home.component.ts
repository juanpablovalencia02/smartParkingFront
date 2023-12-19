import { Component, OnInit } from '@angular/core';
import { CoreService } from '@services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persona: any = {};
  empresa: any = {};
  permisos: any = {};

  constructor(private _coreService: CoreService) { }

  ngOnInit(): void {
    this._coreService.empresa.subscribe(empresa => {
      this.empresa = empresa;
    })

    this._coreService.persona.subscribe(persona => {
      this.persona = persona;
    })

    this._coreService.permissions.subscribe(permissions => {
      this.permisos = permissions;
    })
  }

}
