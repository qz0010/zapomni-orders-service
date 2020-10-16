import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {OrderRequestModule} from '../../core/order-request/order-request.module';

export const ROUTES: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  declarations: [
    IndexComponent
  ],
  exports: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    OrderRequestModule
  ]
})
export class IndexModule { }
