import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {VIEWPORT_CONFIG} from './core/viewport/viewport.service';
import {ViewportModule} from './core/viewport/viewport.module';
import {ModalDialogModule} from './core/modal-dialog/modal-dialog.module';
import {PopoverModule} from './core/popover/popover.module';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/interceptors/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';


registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    TransferHttpCacheModule,
    AppRoutingModule,
    ViewportModule,
    ModalDialogModule,
    PopoverModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    {
      provide: VIEWPORT_CONFIG, useValue: {medium: 726, large: 850}
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
