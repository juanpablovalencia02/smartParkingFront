import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  private _show: Boolean = false;

  @Input() title: string;

  @Output() showChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  set show(val: boolean) {
    if (val == this._show) return;
    this._show = val;
    if (val) {
      this.openModalClase(false)
    } else {
      this.closeModal()
    }
  }

  openModalClase(updateValue = true) {
    this.myModal.show();
    if (updateValue) {
      this.changeVisibility(true)
    }
  }

  closeModal() {
    this.myModal.hide();
    this.changeVisibility(false);
  }

  changeVisibility(value) {
    this._show = value
    this.showChange.emit(value)
  }

  ngOnInit(): void {
    // console.log("inicio")
  }

}
