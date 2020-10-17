import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {IRefundRules} from '../../types/api';
import {ModalDialogService} from '../../../core/modal-dialog/services/modal-dialog.service';

@Component({
  selector: 'app-modal-rules',
  templateUrl: './modal-rules.component.html',
  styleUrls: ['./modal-rules.component.styl']
})
export class ModalRulesComponent implements OnInit {
  public data: IRefundRules = this.ordersService.commonRules;

  constructor(
    private ordersService: OrdersService,
    public modal: ModalDialogService
  ) { }

  ngOnInit(): void {
    this.ordersService.getCommonRules().subscribe(data => {
      this.data = data;
    });
  }
}
