import {AfterViewInit, Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl} from '@angular/forms';
import {validateEqualFactory} from '../equal.validator';

@Directive({
  selector: '[appEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true}]
})
export class EqualValidatorDirective implements Validator, OnInit {
  @Input() appEqualValidator: string;
  @Input() equalValidatorReverse = false;
  validator: ValidatorFn;

  constructor() {}

  ngOnInit(): void {
    this.validator = validateEqualFactory(this.appEqualValidator, this.equalValidatorReverse);
  }

  validate(formControl: AbstractControl) {
    return this.validator(formControl);
  }
}
