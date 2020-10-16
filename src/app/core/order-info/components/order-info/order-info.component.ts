import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from '../../../../shared/types/api';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.styl']
})
export class OrderInfoComponent implements OnInit {
  @Input() order: IOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
