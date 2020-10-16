import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.styl']
})
export class ButtonActionComponent implements OnInit {
  @Input() type = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
