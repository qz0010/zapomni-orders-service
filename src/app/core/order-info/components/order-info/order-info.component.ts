import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from '../../../../shared/types/api';
import {OrdersService} from '../../../../shared/services/orders.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.styl']
})
export class OrderInfoComponent implements OnInit {
  @Input('order') set setOrder(order: IOrder) {
    this.order = order;
    this.email = order?.data?.email;
  }
  public order: IOrder;
  public email;

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
  }

  onContactsChange(email: string) {
    this.ordersService.editContacts(this.order, {email}).subscribe(() => {
      this.order.data.email = email;
    });
  }
}
