import {Directive, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALIDATORS, Validator, ValidatorFn, AbstractControl} from '@angular/forms';
import { validateMinFactory } from '../min.validator';

@Directive({
  selector: '[appMinValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => MinValidatorDirective), multi: true}]
})
export class MinValidatorDirective implements Validator, OnInit {
  @Input() appMinValidator: number;
  validator: ValidatorFn;

  constructor() {}

  ngOnInit(): void {
    this.validator = validateMinFactory(this.appMinValidator);
  }

  validate(formControl: AbstractControl) {
    return this.validator(formControl);
  }
}
