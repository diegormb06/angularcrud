import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    url: '',
  });

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
