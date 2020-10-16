import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormControl, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { validatePhoneFactory } from '../phone.validator';

@Directive({
  selector: '[appPhoneInputValue]',
})
export class PhoneInputValueDirective implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private prevValue: number;
  private maxLength = 15;
  private pattern = /^\+?\d*$/;

  constructor(private el: ElementRef, private control: NgControl) {}

  ngOnInit() {
    this.subscriptions = [
      this.control.valueChanges.subscribe(v => {
        if (v && !this.validate(v)) {
          this.control.control.setValue(this.prevValue);
          return;
        }
        this.prevValue = v || '';
      }),
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }

  validate(value: string): boolean {
    return (!!value.match(this.pattern)) && value.length <= this.maxLength;
  }
}
