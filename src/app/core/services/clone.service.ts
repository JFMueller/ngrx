import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { CloneTypes } from '../enums/clone-type';
import { PerformanceLogService } from './performance-log.service';

@Injectable()
export class CloneService {

  constructor(private pls: PerformanceLogService) {
  }

  cloneMultipleTimes(object: any, cloneType: CloneTypes, amount = 1): any[] {
    this.pls.log(`Cloning ${amount} elements...`);
    let result = [];
    switch (cloneType) {
      case CloneTypes.DeepNative:
        result = this.createClones(object, this.deepCloneNative, amount);
        break;
      case CloneTypes.DeepLodash:
        result = this.createClones(object, this.deepCloneLodash, amount);
        break;
      case CloneTypes.ShallowES6:
        result = this.createClones(object, this.shallowCloneES6, amount);
        break;
      case CloneTypes.ShallowLodash:
        result = this.createClones(object, this.shallowCloneLodash, amount);
        break;
    }
    this.pls.log(`Finished ${cloneType} clone!`);
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
    return Object.assign(Object.create(object.prototype), object);
  }

  private shallowCloneLodash(object: any): any {
    return _.clone(object);
  }
}
