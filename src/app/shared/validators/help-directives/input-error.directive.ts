import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appInputError]'
})
export class InputErrorDirective implements AfterViewInit, OnDestroy {
  @Input() inpRef: NgModel;
  @Input() errorClass = 'f-error';
  private onChanges: Subscription;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.onChanges = this.inpRef.control.valueChanges.subscribe(() => {
      this.checkAndSetErrorClass();
    });
  }

  ngOnDestroy(): void {
    if (this.onChanges) {
      this.onChanges.unsubscribe();
    }
  }

  checkAndSetErrorClass() {
    const $el = this.el.nativeElement;
    const control = this.inpRef.control;
    if (!control.valid && control.dirty) {
      $el.classList.add(this.errorClass);
    } else {
      $el.classList.remove(this.errorClass);
    }
  }
}
