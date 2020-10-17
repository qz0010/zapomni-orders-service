import { Component, OnInit } from '@angular/core';
import {ModalDialogService} from '../../../core/modal-dialog/services/modal-dialog.service';

@Component({
  selector: 'app-modal-request-rules-error',
  templateUrl: './modal-request-rules-error.component.html',
  styleUrls: ['./modal-request-rules-error.component.styl']
})
export class ModalRequestRulesErrorComponent implements OnInit {

  constructor(
    public modal: ModalDialogService
  ) { }

  ngOnInit(): void {
  }

}
