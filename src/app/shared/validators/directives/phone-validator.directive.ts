import { Directive, Input } from '@angular/core';
import {NG_VALIDATORS, Validator, FormControl, ValidatorFn} from '@angular/forms';
import {validatePhoneFactory} from '../phone.validator';


@Directive({
  selector: '[appPhoneValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }]
})
export class PhoneValidatorDirective implements Validator {
  @Input() appPhoneValidator = '';
  validator: ValidatorFn;

  constructor() {
    this.validator = validatePhoneFactory();
  }

  validate(formControl: FormControl) {
    // if (!this.appPhoneValidator) {
    //   return;
    // }
    // return PhoneValidator(this.appPhoneValidator)(formControl);
    return this.validator(formControl);
  }
}
