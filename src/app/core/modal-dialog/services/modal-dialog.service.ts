import {Component, Injectable, Type, ViewContainerRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {DynamicComponentService} from '../../dynamic-component/services/dynamic-component.service';
import {IModalDialogShowHide} from '../types/modal';

@Injectable()
export class ModalDialogService {
  private showHideSource: BehaviorSubject<IModalDialogShowHide> = new BehaviorSubject<IModalDialogShowHide>(null);
  public showHide$: Observable<IModalDialogShowHide> = this.showHideSource.asObservable();

  constructor(
  ) { }

  close(): void {
    this.showHideSource.next(null);
  }

  open(data: IModalDialogShowHide): void {
    this.showHideSource.next({show: true, ...data});
  }
}
