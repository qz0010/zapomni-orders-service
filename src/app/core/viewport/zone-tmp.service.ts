import {
  Inject,
  Injectable,
  NgZone,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

interface IZoneTemplate {
  container: ViewContainerRef;
  tmp: TemplateRef<any>;
}

@Injectable()
export class ZoneTmpService {
  private toggleZoneTmpSource = new Subject();
  private toggleZoneTmp$ = this.toggleZoneTmpSource
    .asObservable()
    .pipe(switchMap(() => of(null).pipe(delay(10))));
  private createZoneData: IZoneTemplate[] = [];
  private clearZoneData: IZoneTemplate[] = [];

  constructor(private zone: NgZone) {
    this.toggleZoneTmp$.subscribe(() => {
      this.clearZoneData.forEach(z => {
        z.container.clear();
      });
      this.clearZoneData = [];
      if (this.createZoneData.length) {
        this.zone.run(() => {
          this.createZoneData.forEach(z => {
            z.container.createEmbeddedView(z.tmp);
          });
          this.createZoneData = [];
        });
      }
    });
  }

  public createZoneTmp(data: IZoneTemplate): void {
    if (!data.container.length) {
      this.createZoneData.push(data);
      this.toggleZoneTmpSource.next();
    }
  }

  public clearZoneTmp(data: IZoneTemplate): void {
    this.clearZoneData.push(data);
    this.toggleZoneTmpSource.next();
  }
}
