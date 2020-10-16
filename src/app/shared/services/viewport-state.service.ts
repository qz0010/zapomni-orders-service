import { Injectable } from '@angular/core';
import {TViewportSize} from '../../core/viewport/viewport.service';

@Injectable({
  providedIn: 'root'
})
export class ViewportStateService {
  public size: TViewportSize;
  public stateSize: string;

  constructor() { }
}
