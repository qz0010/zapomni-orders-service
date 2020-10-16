import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appFocusInput]',
})
export class FocusInputDirective implements OnInit, OnChanges {
  @Input('appFocusInput') isFocus: boolean;
  private timeout;

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.focus();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isFocus.currentValue) {
      this.focus();
    } else if (!changes.isFocus.currentValue) {
      this.hostElement.nativeElement.blur();
    }
  }

  focus() {
    if (this.isFocus) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.hostElement.nativeElement.focus();
      }, 200);
    }
  }
}
