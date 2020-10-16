import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderInfoComponent} from './components/order-info/order-info.component';
import {OrderInfoContactsComponent} from './components/order-info/order-info-contacts/order-info-contacts.component';
import {OrderInfoTableComponent} from './components/order-info/order-info-table/order-info-table.component';
import {OrderInfoRulesTextComponent} from './components/order-info/order-info-rules-text/order-info-rules-text.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ValidatorsModule} from '../../shared/validators/validators.module';
import {ViewportModule} from '../viewport/viewport.module';



@NgModule({
  declarations: [
    OrderInfoComponent,
    OrderInfoContactsComponent,
    OrderInfoTableComponent,
    OrderInfoRulesTextComponent,
  ],
  exports: [
    OrderInfoComponent,
    OrderInfoContactsComponent,
    OrderInfoTableComponent,
    OrderInfoRulesTextComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ValidatorsModule,
    ViewportModule
  ]
})
export class OrderInfoModule { }
