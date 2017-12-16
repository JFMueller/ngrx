import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { CloneTypes } from '../enums/clone-type';

@Injectable()
export class CloneService {

  cloneMultipleTimes(object: any, cloneType: CloneTypes, amount = 1): any[] {
    switch (cloneType) {
      case CloneTypes.DeepNative:
        return this.createClones(object, this.deepCloneNative, amount);
      case CloneTypes.DeepLodash:
        return this.createClones(object, this.deepCloneLodash, amount);
      case CloneTypes.ShallowES6:
        return this.createClones(object, this.shallowCloneES6, amount);
      case CloneTypes.ShallowLodash:
        return this.createClones(object, this.shallowCloneLodash, amount);
      default:
        return [];
    }
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
