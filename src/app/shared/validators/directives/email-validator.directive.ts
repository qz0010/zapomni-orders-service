import { Directive, Input } from '@angular/core';
import {NG_VALIDATORS, Validator, FormControl, ValidatorFn} from '@angular/forms';
import {validateEmailFactory} from '../email.validator';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
  @Input() appEmailValidator = '';
  validator: ValidatorFn;

  constructor() {
    this.validator = validateEmailFactory();
  }

  validate(formControl: FormControl) {
    return this.validator(formControl);
  }
}
