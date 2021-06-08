import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TableDataService {
  public tableHierarchy = new BehaviorSubject<any>({});
  constructor() { }
}
