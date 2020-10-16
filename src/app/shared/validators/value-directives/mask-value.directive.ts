import {
  Directive,
  ElementRef, HostListener,
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
  selector: '[appMaskInputValue]',
})
export class MaskValueDirective implements OnInit, OnDestroy {
  @Input() appMaskInputValue: string;
  private subscriptions: Subscription[] = [];

  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('focus', ['$event'])
  onFocus(e) {
    if (!this.control.value) {
      this.control.control.setValue(this.appMaskInputValue);
    }
  }

  ngOnInit() {
    // this.subscriptions = [
    //   this.control.valueChanges.subscribe(v => {
    //     if (v) {
    //       this.control.control.setValue(this.prevValue);
    //       return;
    //     }
    //     this.prevValue = v || '';
    //   }),
    // ];
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }

}
