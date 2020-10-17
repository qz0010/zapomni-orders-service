import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {SectionHeadComponent} from './components/section-head/section-head.component';
import {SectionComponent} from './components/section/section.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {ButtonActionComponent} from './components/button-action/button-action.component';
import {ModalDialogModule} from '../core/modal-dialog/modal-dialog.module';
import { ModalRequestFixedComponent } from './components/modal-request-fixed/modal-request-fixed.component';
import { PopoverOrderItemInfoComponent } from './components/popover-order-item-info/popover-order-item-info.component';
import {ModalRulesComponent} from './components/modal-rules/modal-rules.component';
import {ModalRequestRulesComponent} from './components/modal-request-rules/modal-request-rules.component';
import {ValidatorsModule} from './validators/validators.module';
import {ClickOutsideDirective} from './directives/click-outside.directive';
import {FormsModule} from '@angular/forms';
import { ModalRequestRulesErrorComponent } from './components/modal-request-rules-error/modal-request-rules-error.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SectionHeadComponent,
    SectionComponent,
    FooterComponent,
    ButtonActionComponent,
    ModalRequestFixedComponent,
    PopoverOrderItemInfoComponent,
    ModalRulesComponent,
    ModalRequestRulesComponent,
    ClickOutsideDirective,
    ModalRequestRulesErrorComponent
  ],
  exports: [
    MainLayoutComponent,
    SectionHeadComponent,
    SectionComponent,
    FooterComponent,
    ButtonActionComponent,
    ModalRulesComponent,
    ModalRequestRulesComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ValidatorsModule,
    FormsModule
  ]
})
export class SharedModule { }
