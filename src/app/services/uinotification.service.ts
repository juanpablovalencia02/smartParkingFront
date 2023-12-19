import { Injectable } from '@angular/core';
import { SnotifyPosition, SnotifyService, SnotifyToastConfig } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class UINotificationService {

  private config: SnotifyToastConfig = {
    timeout: 5000,
    showProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    titleMaxLength: 20,
    bodyMaxLength: 80,
    position: SnotifyPosition.rightBottom,
  }

  constructor(private _notificationService: SnotifyService) { }

  success(body: string, title: string = null) {
    if (title) {
      this._notificationService.success(body, title, this.config);
    } else {
      this._notificationService.success(body, this.config);
    }
  }


  error(body: string, title: string = null) {
    if (title) {
      this._notificationService.error(body, title, this.config);
    } else {
      this._notificationService.error(body, this.config);
    }
  }

  clearAll() {
    this._notificationService.clear();
  }
}
