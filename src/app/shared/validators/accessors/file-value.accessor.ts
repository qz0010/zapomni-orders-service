import { Directive, HostListener } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Directive({
  selector: 'input[type=file]',
  // host : {
  //   "(change)" : "onChange($event.target.files)",
  //   "(blur)": "onTouched()"
  // },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessorDirective, multi: true }
  ]
})
export class FileValueAccessorDirective implements ControlValueAccessor {
  value: any;
  onChange = (_) => {};
  onBlur = () => {};

  @HostListener('change', ['$event'])
  onValueChange(e: Event | any): void {
    this.onChange(e.target.files);
  }
  @HostListener('blur', ['$event'])
  onInputBlur(e: Event | any): void {
    this.onBlur();
  }

  writeValue(value) {}
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onBlur = fn; }
}
