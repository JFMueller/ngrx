import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldBankDto } from '../../core/domain/world-bank';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { ProjectsActions } from '../../state/actions';
import { CloneType } from '../../core/enums/clone-type';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'rx-clone-details',
  templateUrl: './clone-details.component.html'
})
export class CloneDetailsComponent implements OnInit, OnDestroy {

  clones: WorldBankDto[];
  cloneType = CloneType;
  formGroup: FormGroup;

  private destroyed$ = new ReplaySubject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  get cloneAmountControl(): AbstractControl {
    return this.formGroup.get('cloneAmount');
  }

  get rowAmountControl(): AbstractControl {
    return this.formGroup.get('rowAmount');
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      rowAmount: [{value: 0, disabled: true}],
      cloneAmount: [{value: 0, disabled: false}, Validators.required]
    });

    this.store.select('projects')
      .takeUntil(this.destroyed$)
      .subscribe((projects: WorldBankDto[]) => {
        this.clones = projects;
        this.rowAmountControl.patchValue(projects.length);
      });
  }

  setForm(amount: number): void {
    this.cloneAmountControl.patchValue(amount);
  }

  clone(cloneType: CloneType): void {
    this.store.dispatch(new ProjectsActions.Clone(+this.cloneAmountControl.value, cloneType));
  }

  clear(): void {
    this.store.dispatch(new ProjectsActions.DeleteAll());
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
