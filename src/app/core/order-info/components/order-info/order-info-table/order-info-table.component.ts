import {Component, Input, OnInit} from '@angular/core';
import {PopoverService} from '../../../../popover/services/popover.service';
import {PopoverOrderItemInfoComponent} from '../../../../../shared/components/popover-order-item-info/popover-order-item-info.component';
import {ModalDialogService} from '../../../../modal-dialog/services/modal-dialog.service';
import {ModalRequestRulesComponent} from '../../../../../shared/components/modal-request-rules/modal-request-rules.component';
import {DeviceDetectorService} from 'ngx-device-detector';
import {IOrder, IOrderItemsContainerItem, IOrderItemsContainerItemData} from '../../../../../shared/types/api';

@Component({
  selector: 'app-order-info-table',
  templateUrl: './order-info-table.component.html',
  styleUrls: ['./order-info-table.component.styl']
})
export class OrderInfoTableComponent implements OnInit {
  @Input() order: IOrder;
  @Input() orderItems: IOrderItemsContainerItem[];

  public isDesktop: boolean;

  constructor(
    private popoverService: PopoverService,
    private modal: ModalDialogService,
    private device: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    this.isDesktop = this.device.isDesktop();
    console.log('order', this.order);
  }

  closeInfoPopover(): void {
    this.popoverService.close();
  }

  onInfoHover(e: Event): void {
    this.popoverService.open({component: PopoverOrderItemInfoComponent, target: e.currentTarget as HTMLElement});
  }

  onInfoUnHover(): void {
    this.closeInfoPopover();
  }

  onInfoClick(e: Event): void {
    this.popoverService.open({component: PopoverOrderItemInfoComponent, target: e.currentTarget as HTMLElement});
  }

  onCancelTicket(data: IOrderItemsContainerItem): void {
    console.log('item', data);
    this.modal.open({component: ModalRequestRulesComponent, data});
  }
}
