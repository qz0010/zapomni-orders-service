import { Component, OnInit } from '@angular/core';
import {ViewportStateService} from '../../services/viewport-state.service';

@Component({
  selector: 'app-section-head',
  templateUrl: './section-head.component.html',
  styleUrls: ['./section-head.component.styl']
})
export class SectionHeadComponent implements OnInit {

  constructor(
    public viewportState: ViewportStateService
  ) { }

  ngOnInit(): void {
  }

}
