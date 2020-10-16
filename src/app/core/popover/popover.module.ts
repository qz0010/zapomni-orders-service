import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './components/popover/popover.component';
import {PopoverService} from './services/popover.service';



@NgModule({
  declarations: [PopoverComponent],
  exports: [
    PopoverComponent
  ],
  providers: [
    PopoverService
  ],
  imports: [
    CommonModule
  ]
})
export class PopoverModule { }
