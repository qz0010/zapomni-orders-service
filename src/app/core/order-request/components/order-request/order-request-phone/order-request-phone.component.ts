import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {OrdersService} from '../../../../../shared/services/orders.service';
import {IApiLoginBody} from '../../../../../shared/types/api';
import {NgForm} from '@angular/forms';
import {HttpResponse} from '@angular/common/http';
import {catchError, finalize, tap} from 'rxjs/operators';
import set = Reflect.set;

@Component({
  selector: 'app-order-request-phone',
  templateUrl: './order-request-phone.component.html',
  styleUrls: ['./order-request-phone.component.styl']
})
export class OrderRequestPhoneComponent implements OnInit {
  public req$: Observable<HttpResponse<any>>;
  public md: IApiLoginBody = {
    phone: '',
  } as IApiLoginBody;
  public fetching = false;
  public isEnteringCode = false;
  public JSON = JSON;

  @Input('ordersError') set setOrdersError(err: any) {
    if (err) {
      this.formRef.controls.phone?.setErrors({ordersError: true});
      this.formRef.controls.code?.setErrors({ordersError: true});
    } else {
      this.formRef.controls.phone?.setErrors({ordersError: null});
      this.formRef.controls.code?.setErrors({ordersError: null});
      this.formRef.controls.phone?.updateValueAndValidity();
      this.formRef.controls.code?.updateValueAndValidity();
    }
  }

  @Input('ordersFetching') set setFetching(f: boolean) {
    this.fetching = f;
  }

  @Output() login: EventEmitter<Observable<any>> = new EventEmitter<Observable<any>>();
  @Output() loginCode: EventEmitter<Observable<any>> = new EventEmitter<Observable<any>>();

  @ViewChild('form', {static: true}) formRef: NgForm;

  constructor(
    private orders: OrdersService
  ) {
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.formRef.controls.phone.setErrors({ordersError: true});
    //   // setTimeout(() => {
    //   //   this.formRef.controls.phone.updateValueAndValidity();
    // //   }, 1000);
    // }, 4000);
  }

  onSubmit(): void {
    this.formRef.controls.phone.setErrors({resError: null});
    this.formRef.controls.phone.updateValueAndValidity();

    const req$ =
      this.orders.login(this.md)
        // of({ok: true})
        .pipe(
          tap((res) => {
            if (res.ok) {
              this.isEnteringCode = true;
            }
          }),
          catchError(res => {
            this.formRef.controls.phone.setErrors({resError: true});
            return throwError(res);
          }),
          finalize(() => {
            this.fetching = false;
          })
        );

    if (this.formRef.valid) {
      this.fetching = true;
      this.login.emit(req$);
    }
  }

  onSubmitCode(): void {
    const req$ =
      this.orders.login(this.md)
        // of({ok: true})
        .pipe(
          tap((res) => {
            if (res.ok) {
            }
          }),
          catchError(res => {
            this.formRef.controls.phone.setErrors({resError: true});
            return throwError(res);
          })
        );
    this.loginCode.emit(req$);
  }
}
