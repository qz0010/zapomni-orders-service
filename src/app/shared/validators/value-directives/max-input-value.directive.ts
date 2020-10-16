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
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appMaxInputValue]',
})
export class MaxInputValueDirective implements OnInit, OnDestroy {
  @Input('appMaxInputValue') appMaxInputValue: number;
  @Input() maxInputValuePattern: RegExp;
  private subscriptions: Subscription[] = [];
  private prevValue: number;

  constructor(private el: ElementRef, private control: NgControl) {}

  ngOnInit() {
    this.subscriptions = [
      this.control.valueChanges.subscribe(v => {
        if (
          (v || v === 0) &&
          (v > this.appMaxInputValue ||
            (this.maxInputValuePattern && !`${v}`.match(this.maxInputValuePattern)))
        ) {
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
}
