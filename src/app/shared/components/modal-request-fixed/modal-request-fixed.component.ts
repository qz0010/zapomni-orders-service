import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalDialogService} from '../../../core/modal-dialog/services/modal-dialog.service';

@Component({
  selector: 'app-modal-request-fixed',
  templateUrl: './modal-request-fixed.component.html',
  styleUrls: ['./modal-request-fixed.component.styl']
})
export class ModalRequestFixedComponent implements OnInit, OnDestroy {

  constructor(
    private modal: ModalDialogService
  ) { }

  ngOnInit(): void {
    console.log('ModalRequestFixedComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ModalRequestFixedComponent ngOnDestroy');
  }

  onClick(): void {
    this.modal.close();
  }
}
