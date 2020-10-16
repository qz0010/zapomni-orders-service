import {
  Inject,
  Injectable,
  InjectionToken,
  NgZone,
  RendererFactory2,
  Renderer2
} from '@angular/core';
import {BehaviorSubject, Subject, of, Observable} from 'rxjs';
import {delay, distinctUntilChanged, switchMap} from 'rxjs/operators';

interface IConfig {
  medium: number;
  large: number;
}

export type TViewportSize = 'small' | 'medium' | 'large';

export const VIEWPORT_CONFIG = new InjectionToken<IConfig>(
  'Viewport service configuration',
  {
    factory: () => ({medium: 0, large: 0})
  }
);

@Injectable()
export class ViewportService {
  public currentSize: TViewportSize;
  private resizeListenerSource = new Subject<TViewportSize>();
  public resizeListener$ = this.resizeListenerSource
    .asObservable()
    .pipe(
      distinctUntilChanged(),
      switchMap(r => of(r).pipe(delay(200)))
    );
  private resizedSource = new BehaviorSubject<TViewportSize>(undefined);
  public resized$ = this.resizedSource.asObservable();
  private renderer: Renderer2;

  constructor(
    @Inject(VIEWPORT_CONFIG) public config: IConfig,
    private zone: NgZone,
    private rendererFactory: RendererFactory2
  ) {
    this.setSize();
    this.resizeListener$.subscribe(size => {
      this.setSize(size);
    });
    this.zone.runOutsideAngular(() => {
      this.renderer = this.rendererFactory.createRenderer(null, null);
      this.renderer.listen('window', 'resize', () => {
        this.resizeListenerSource.next(this.getSize());
      });
    });
  }

  listen(): Observable<TViewportSize> {
    const resizeListenerSource = new BehaviorSubject<TViewportSize>(this.getSize());
    const resizeListener$ = resizeListenerSource
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        switchMap(r => of(r).pipe(delay(200)))
      );

    this.zone.runOutsideAngular(() => {
      this.renderer.listen('window', 'resize', () => {
        resizeListenerSource.next(this.getSize());
      });
    });
    return resizeListener$;
  }

  setSize(size?: TViewportSize): void {
    this.currentSize = size || this.getSize();
    this.resizedSource.next(this.currentSize);
  }

  getSize(): TViewportSize {
    const w = window.innerWidth;
    const config = this.config;
    return w < config.medium
      ? 'small'
      : config.medium <= w && w < config.large
        ? 'medium'
        : config.large <= w
          ? 'large'
          : undefined;
  }
}
