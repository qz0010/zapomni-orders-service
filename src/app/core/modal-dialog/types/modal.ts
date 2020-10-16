import {Type} from '@angular/core';

export interface IModalDialogShowHide {
  show?: boolean;
  component?: Type<any>;
  parentClass?: string;
  data?: any;
}
