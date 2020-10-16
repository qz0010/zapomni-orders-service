import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { InputErrorDirective } from './help-directives/input-error.directive';
import { NativeElementControlDirective } from './help-directives/native-element-control.directive';
import { PhoneInputValueDirective } from './value-directives/phone-input-value.directive';
import { FocusInputDirective } from './help-directives/focus-input.directive';
import { MaxInputValueDirective } from './value-directives/max-input-value.directive';
import { MinValidatorDirective } from './directives/min-validator.directive';
import { FileValidatorDirective } from './directives/file-validator.directive';
import { FileValueAccessorDirective } from './accessors/file-value.accessor';
import { MaskValueDirective } from './value-directives/mask-value.directive';

const declarations = [
  EmailValidatorDirective,
  EqualValidatorDirective,
  PhoneValidatorDirective,
  PhoneInputValueDirective,
  InputErrorDirective,
  NativeElementControlDirective,
  FocusInputDirective,
  MaxInputValueDirective,
  MinValidatorDirective,
  FileValidatorDirective,
  FileValueAccessorDirective,
  MaskValueDirective
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
  ],
})
export class ValidatorsModule { }
