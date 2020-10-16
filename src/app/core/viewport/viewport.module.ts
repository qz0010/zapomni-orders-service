import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { ViewportService } from './viewport.service';
import { ZoneTmpService } from './zone-tmp.service';

@NgModule({
  declarations: [IfViewportSizeDirective],
  imports: [CommonModule],
  exports: [IfViewportSizeDirective],
  providers: [ViewportService, ZoneTmpService]
})
export class ViewportModule {}
