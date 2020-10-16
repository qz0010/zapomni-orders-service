import {ChangeDetectorRef, Component, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs';
import {ModalDialogService} from '../../services/modal-dialog.service';
import {DynamicComponentService} from '../../../dynamic-component/services/dynamic-component.service';
import set = Reflect.set;
import {delay} from 'rxjs/operators';
import {IModalDialogShowHide} from '../../types/modal';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.styl']
})
export class ModalDialogComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
  public showHide$: Observable<IModalDialogShowHide>;

  constructor(
    private modalService: ModalDialogService,
    private dcService: DynamicComponentService,
  ) {
    this.showHide$ = this.modalService.showHide$;
    this.showHide$
      .pipe(delay(1))
      .subscribe(data => {
        if (data?.show) {
          this.dcService.create(data.component, this.container);
        }
    });
  }

  ngOnInit(): void {
  }

  close(): void {
    this.modalService.close();
  }

  onBodyClick(e: Event): void {
    e.stopImmediatePropagation();
  }
}
