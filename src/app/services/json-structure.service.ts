import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class JsonStructureService {

  constructor() { }

  getJsonStructure(data: any) {
    let keys = [];
    let newData = [];
    if (data instanceof Array) {
      for (let i of data) {
        for (let k in i) {
          let label = this.getReadableLabel(k);
          let type = this.getType(i[k]);
          keys.push(label);
          newData.push({ [label]: type });
        }
      }
    } else {
      for (let k in data) {
        let label = this.getReadableLabel(k);
        let type = this.getType(data[k]);
        keys.push(label);
        newData.push({ [label]: type });
      }
    }

    return { keys: keys, arr: newData };
  }

  getType(arg: any): any {
    if (isNaN(arg) && !isNaN(Date.parse(arg))) {
      return 'Date picker input';
    } else if (typeof arg === 'string') {
      return 'Text input';
    } else if (typeof arg === 'number') {
      return 'Number input';
    } else if (arg instanceof Array) {
      return arg;
    } else {
      console.error('Wrong input')
    }
  }

  getReadableLabel(str: string) {
    let result = str.replace(/([A-Z])/g, " $1");
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }
}
