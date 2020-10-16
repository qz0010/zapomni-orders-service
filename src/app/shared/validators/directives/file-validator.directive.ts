import { Directive, ElementRef, forwardRef, HostListener, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ControlContainer, NgControl } from '@angular/forms';
import { IFileValidatorOptions, validateFileFactory } from '../file.validator';

@Directive({
  selector: '[appFileValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => FileValidatorDirective), multi: true}]
})
export class FileValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() appFileValidator: IFileValidatorOptions;
  @Input() imgSize: {w: number, h: number, clientW: number, clientH: number};
  validator: ValidatorFn;

  constructor(private injector: Injector) {}

  @HostListener('change', ['$event'])
  onChange(e: Event) {
  }

  ngOnInit(): void {
    this.validator = validateFileFactory(this.appFileValidator);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes.imgSize && changes.imgSize.currentValue) ||
      changes.appFileValidator
    ) {
      this.validator = validateFileFactory(this.appFileValidator, this.imgSize);
      this.injector.get(NgControl, null).control.updateValueAndValidity();
    }
  }

  validate(formControl: AbstractControl) {
    return this.validator(formControl);
  }
}
