import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  appOne: boolean;
  appTwo: boolean;

  constructor() { }

  set usingAppOne(value: boolean) {
    this.appOne = value;
  }

  get usingAppOne(): boolean {
    return this.appOne;
  }

  set usingAppTwo(value: boolean) {
    this.appTwo = value;
  }

  get usingAppTwo(): boolean {
    return this.appTwo;
  }

}
