import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { WorldBankDto } from '../domain/world-bank';
import {
  Actions,
  Effect
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProjectsActions } from '../../state/actions';
import { CloneService } from './clone.service';
import { CloneType } from '../enums/clone-type';

@Injectable()
export class DataSampleEffects {

  @Effect()
  cloneProjects: Observable<Action> = this.actions$.ofType(ProjectsActions.CLONE)
    .switchMap((action: ProjectsActions.Clone) => this.cloneSpecifiedAmount(action.amount, action.cloneType))
    .map((projects: WorldBankDto[]) => new ProjectsActions.Load(projects));

  constructor(private actions$: Actions,
              private cloneService: CloneService,
              private httpClient: HttpClient) {
  }

  private cloneSpecifiedAmount(amount: number, cloneType: CloneType): Observable<WorldBankDto[]> {
    return this.httpClient.get<WorldBankDto[]>('assets/world-bank.json')
      .map((projects: WorldBankDto[]) => this.cloneService.cloneMultipleTimes(projects, cloneType, amount))
      .map((clones: WorldBankDto[][]) => clones.reduce((prev: WorldBankDto[], curr: WorldBankDto[]) => prev.concat(curr), []))
      .map((clones: WorldBankDto[]) => clones.map((worldBankDto: WorldBankDto) => Object.assign({
        approvalfy: worldBankDto.approvalfy,
        board_approval_month: worldBankDto.board_approval_month,
        id: worldBankDto.id,
        lendprojectcost: worldBankDto.lendprojectcost,
        lendinginstr: worldBankDto.lendinginstr,
        country_namecode: worldBankDto.country_namecode
      })));
  }
}
