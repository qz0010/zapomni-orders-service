import { Component, OnInit } from '@angular/core';
import {ViewportStateService} from '../../services/viewport-state.service';
import {ModalDialogService} from '../../../core/modal-dialog/services/modal-dialog.service';
import {ModalRulesComponent} from '../modal-rules/modal-rules.component';

@Component({
  selector: 'app-section-head',
  templateUrl: './section-head.component.html',
  styleUrls: ['./section-head.component.styl']
})
export class SectionHeadComponent implements OnInit {

  constructor(
    public viewportState: ViewportStateService,
    private modal: ModalDialogService
  ) { }

  ngOnInit(): void {
  }

  onRulesClick(): void {
    this.modal.open({component: ModalRulesComponent});
  }
}
