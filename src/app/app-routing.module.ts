import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {IndexModule} from './pages/index/index.module';
import {SharedModule} from './shared/shared.module';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '',
        // loadChildren: () => import('./pages/index/index.module').then((m) => m.IndexModule),
        component: IndexComponent
      }
    ],
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
