import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderRequestComponent} from './components/order-request/order-request.component';
import {OrderRequestFoundComponent} from './components/order-request/order-request-found/order-request-found.component';
import {OrderRequestPhoneComponent} from './components/order-request/order-request-phone/order-request-phone.component';
import {OrderInfoModule} from '../order-info/order-info.module';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ValidatorsModule} from '../../shared/validators/validators.module';



@NgModule({
  declarations: [
    OrderRequestComponent,
    OrderRequestFoundComponent,
    OrderRequestPhoneComponent
  ],
  exports: [
    OrderRequestComponent,
    OrderRequestFoundComponent,
    OrderRequestPhoneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    OrderInfoModule,
    ValidatorsModule,
  ]
})
export class OrderRequestModule { }
