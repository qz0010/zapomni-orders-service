import { Component, OnInit } from '@angular/core';
import {ModalDialogService} from '../../../../modal-dialog/services/modal-dialog.service';
import {ModalRequestFixedComponent} from '../../../../../shared/components/modal-request-fixed/modal-request-fixed.component';

@Component({
  selector: 'app-order-request-found',
  templateUrl: './order-request-found.component.html',
  styleUrls: ['./order-request-found.component.styl']
})
export class OrderRequestFoundComponent implements OnInit {

  constructor(
    private modal: ModalDialogService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.modal.open({component: ModalRequestFixedComponent, parentClass: 'mxn-modal-parent-small-gap'});
  }
}
