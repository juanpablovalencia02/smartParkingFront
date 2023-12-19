import { Component, OnInit } from '@angular/core';
import { PersonaModel } from '@models/persona.model';
import { CoreService } from '@services/core.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  persona: PersonaModel

  constructor(
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this._coreService.persona.subscribe(persona => {
      this.persona = persona;
    });
  }

}
