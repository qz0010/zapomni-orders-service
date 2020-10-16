import {AfterContentChecked, ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {DeviceDetectorService, DeviceInfo} from 'ngx-device-detector';
import {TViewportSize, ViewportService} from './core/viewport/viewport.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {ViewportStateService} from './shared/services/viewport-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements AfterContentChecked {
  public deviceType: 'desktop' | 'mobile' | 'tablet';
  public deviceName: string;
  public size: TViewportSize;
  public initSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public init$: Observable<boolean> = this.initSource.asObservable();

  constructor(
    public device: DeviceDetectorService,
    public viewport: ViewportService,
    private zone: NgZone,
    private detectorRef: ChangeDetectorRef,
    public viewportState: ViewportStateService
  ) {
    const deviceInfo: DeviceInfo = this.device.getDeviceInfo();
    const isDesktop: boolean = this.device.isDesktop();
    const isTablet: boolean = this.device.isDesktop();

    this.deviceType = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';
    this.deviceName = deviceInfo.device;

    this.size = this.viewport.getSize();
    this.viewportState.size = this.size;
    this.viewportState.stateSize = `device-size-${this.size}`;
    this.initSource.next(true);
    this.viewport.listen().subscribe(sz => {
      this.size = sz;
      this.viewportState.stateSize = `device-size-${this.size}`;
      this.detectorRef.detectChanges();
    });
    console.log('deviceInfo', deviceInfo);
  }

  ngAfterContentChecked(): void {
    console.log('AppComponent ngAfterContentChecked');
  }
}
