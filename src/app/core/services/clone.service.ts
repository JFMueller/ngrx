import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { CloneType } from '../enums/clone-type';
import { PerformanceLogService } from './performance-log.service';

@Injectable()
export class CloneService {

  constructor(private pls: PerformanceLogService) {
  }

  cloneMultipleTimes(object: any, cloneType: CloneType, amount = 1): any[] {
    let result = [];
    const start = window.performance.now();
    switch (cloneType) {
      case CloneType.DeepNative:
        result = this.createClones(object, this.deepCloneNative, amount);
        break;
      case CloneType.DeepLodash:
        result = this.createClones(object, this.deepCloneLodash, amount);
        break;
      case CloneType.ShallowES6:
        result = this.createClones(object, this.shallowCloneES6, amount);
        break;
      case CloneType.ShallowLodash:
        result = this.createClones(object, this.shallowCloneLodash, amount);
        break;
    }
    this.pls.duration(`${cloneType} cloned ${amount} objects`, start);
    return result;
  }

  private createClones(object: any, cloneFunction: (object: any) => any, amount: number): any[] {
    const result = [];
    for (let i = 0; i < amount; i++) {
      result.push(cloneFunction(object));
    }
    return result;
  }

  private deepCloneNative(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }

  private deepCloneLodash(object: any): any {
    return _.cloneDeep(object);
  }

  private shallowCloneES6(object: any): any {
    return Object.assign(object);
  }

  private shallowCloneLodash(object: any): any {
    return _.clone(object);
  }
}
