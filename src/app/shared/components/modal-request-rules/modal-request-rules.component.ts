import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalDialogService} from '../../../core/modal-dialog/services/modal-dialog.service';
import {ModalRulesComponent} from '../modal-rules/modal-rules.component';
// import {last} from 'rxjs/operators';
import {IOrderItemsContainerItem} from '../../types/api';
import {Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-modal-request-rules',
  templateUrl: './modal-request-rules.component.html',
  styleUrls: ['./modal-request-rules.component.styl']
})
export class ModalRequestRulesComponent implements OnInit, OnDestroy {
  public data: IOrderItemsContainerItem;
  public agree = false;
  public fetching = false;
  private destroy$ = new Subject();

  constructor(
    private modal: ModalDialogService,
    private ordersService: OrdersService
  ) {
  }

  ngOnInit(): void {
    this.modal.showHide$
      // .pipe(last())
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.data = value?.data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onRulesClick(): void {
    this.modal.close();
    this.modal.open({component: ModalRulesComponent});
  }

  onApprove(): void {
    this.fetching = true;
    this.ordersService.removeOrderItem(this.data)
      .pipe(
        finalize(() => {
          this.fetching = false;
        })
      )
      .subscribe(res => {
        this.ordersService.removeOrderItemEmit(this.data);
        this.modal.close();
      });
  }
}
