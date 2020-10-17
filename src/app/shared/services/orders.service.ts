import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IApiLoginBody, IOrder, IOrderContacts, IOrderItemsContainerItem, IRefundRules} from '../types/api';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private removeOrderItemSource: Subject<IOrderItemsContainerItem> = new Subject<IOrderItemsContainerItem>();
  public removeOrderItem$: Observable<IOrderItemsContainerItem> = this.removeOrderItemSource.asObservable();
  public commonRules: IRefundRules;

  constructor(
    private http: HttpClient
  ) {
    this.getCommonRules().subscribe(data => this.commonRules = data);
  }

  public login(data: IApiLoginBody): Observable<HttpResponse<any>> {
    return this.http.post(`${apiUrl}/login`, {type: 'sms', ...data}, {observe: 'response'});
  }

  public getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${apiUrl}/account/order`);
  }

  public removeOrderItem(item: IOrderItemsContainerItem): Observable<any> {
    return this.http.delete(`${apiUrl}/account/order/item/${item.data.uuid}`);
  }

  public removeOrderItemEmit(item: IOrderItemsContainerItem) {
    this.removeOrderItemSource.next(item);
  }

  public editContacts(order: IOrder, data: IOrderContacts): Observable<any> {
    return this.http.post(`${apiUrl}/account/order/${order.data.uuid}`, data);
  }

  public getCommonRules(): Observable<IRefundRules> {
    return this.http.get<IRefundRules>(`${apiUrl}/info/refund-rules`);
  }
}
