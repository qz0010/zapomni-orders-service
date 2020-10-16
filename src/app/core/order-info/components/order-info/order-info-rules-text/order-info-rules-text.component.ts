import { Component, OnInit } from '@angular/core';
import {ModalDialogService} from '../../../../modal-dialog/services/modal-dialog.service';
import {ModalRulesComponent} from '../../../../../shared/components/modal-rules/modal-rules.component';

@Component({
  selector: 'app-order-info-rules-text',
  templateUrl: './order-info-rules-text.component.html',
  styleUrls: ['./order-info-rules-text.component.styl']
})
export class OrderInfoRulesTextComponent implements OnInit {

  constructor(
    private modal: ModalDialogService
  ) { }

  ngOnInit(): void {
  }

  onRulesClick(): void {
    this.modal.open({component: ModalRulesComponent});
  }
}
