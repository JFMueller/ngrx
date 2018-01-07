import { Action } from '@ngrx/store';
import { WorldBankDto } from '../../core/domain/world-bank';
import { CloneType } from '../../core/enums/clone-type';

export const CLONE = '[Projects] Clone';
export const LOAD = '[Projects] Load';
export const CREATE = '[Projects] Create';
export const UPDATE = '[Projects] Update';
export const CREATE_OR_UPDATE = '[Projects] Create or Update';
export const DELETE = '[Projects] Delete';
export const DELETE_ALL = '[Projects Delete All';

export class Clone implements Action {
  readonly type = CLONE;

  constructor(public amount: number, public cloneType: CloneType) {
  }
}

export class Load implements Action {
  readonly type = LOAD;

  constructor(public projects: WorldBankDto[]) {
  }
}

export class Create implements Action {
  readonly type = CREATE;

  constructor(public project: WorldBankDto) {
  }
}

export class Update implements Action {
  readonly type = UPDATE;

  constructor(public project: WorldBankDto) {
  }
}

export class CreateOrUpdate implements Action {
  readonly type = CREATE_OR_UPDATE;

  constructor(public project: WorldBankDto) {
  }
}

export class Delete implements Action {
  readonly type = DELETE;

  constructor(public project: WorldBankDto) {
  }
}

export class DeleteAll implements Action {
  readonly type = DELETE_ALL;
}


export type All
  = Load
  | Create
  | Update
  | CreateOrUpdate
  | Delete
  | DeleteAll;
