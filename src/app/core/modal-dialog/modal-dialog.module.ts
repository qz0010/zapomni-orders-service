import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import {ModalDialogService} from './services/modal-dialog.service';
import {DynamicComponentModule} from '../dynamic-component/dynamic-component.module';



@NgModule({
  declarations: [
    ModalDialogComponent
  ],
  exports: [
    ModalDialogComponent
  ],
  providers: [
    ModalDialogService
  ],
  imports: [
    CommonModule,
    DynamicComponentModule
  ]
})
export class ModalDialogModule { }
