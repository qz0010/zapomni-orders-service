import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-order-info-contacts',
  templateUrl: './order-info-contacts.component.html',
  styleUrls: ['./order-info-contacts.component.styl']
})
export class OrderInfoContactsComponent implements OnInit {
  @Input('emailMd') set setMd(email: string) {
    this.md = email;
  }
  @Output() changeEmail: EventEmitter<string> = new EventEmitter<string>();

  public md: string;
  public isChanging = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChangePhone(): void {
    this.isChanging = true;
  }

  onChangePhoneSubmit(): void {
    this.isChanging = false;
    this.changeEmail.emit(this.md);
  }

  onChangeCancel(): void {
    this.isChanging = false;
  }
}
