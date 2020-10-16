import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {TViewportSize, ViewportService} from './viewport.service';
import { Subscription } from 'rxjs';
import { ZoneTmpService } from './zone-tmp.service';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective implements OnInit, OnDestroy {
  @Input('ifViewportSize') sizes: TViewportSize[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private viewportService: ViewportService,
    private zoneTmpService: ZoneTmpService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.viewportService.resized$.subscribe(v => {
        this.checkSizeAndToggle();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  checkSizeAndToggle(): void {
    if (!this.sizes.includes(this.viewportService.currentSize)) {
      this.zoneTmpService.clearZoneTmp({
        container: this.viewContainer,
        tmp: this.templateRef
      });
    } else {
      this.zoneTmpService.createZoneTmp({
        container: this.viewContainer,
        tmp: this.templateRef
      });
    }
  }
}
