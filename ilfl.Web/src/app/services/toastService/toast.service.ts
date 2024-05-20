import { Injectable, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private subject = new Subject<any>();
  toasts: any[] = [];
  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title);
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title);
  }

  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  confirmThis(message: string, yesFn: () => void, noFn: () => void): any {
    this.setConfirmation(message, yesFn, noFn);
  }

  setConfirmation(message: string, yesFn: () => void, noFn: () => void): any {
    const prop = this;
    this.subject.next({
      type: 'confirm',
      text: message,
      yesFn(): any {
        prop.subject.next(''); // This will close the modal  
        yesFn();
      },
      noFn(): any {
        prop.subject.next('');
        noFn();
      }
    });
  }

  detailShowboxClose(message: string, closeFn: () => void): any {
    this.detailShowBox(message, closeFn);
  }

  detailShowBox(message: string, closeFn: () => void): any {
    const prop = this;
    this.subject.next({
      type: 'detail',
      text: message,
      closeFn(): any {
        prop.subject.next('');
        closeFn();
      }
    });

  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
