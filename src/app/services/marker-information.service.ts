import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { luminaria } from '../model/luminaria';
@Injectable({
  providedIn: 'root'
})
export class MarkerInformationService {

  public newValue = new BehaviorSubject<any>(null);
  luminaria = this.newValue.asObservable();

  constructor() { }

  async setLuminaria(lum: luminaria){
    this.newValue.next(lum)
  }
}
