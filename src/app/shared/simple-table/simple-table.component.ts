import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { WorldBankDto } from '../../core/domain/world-bank';
import { PerformanceLogService } from '../../core/services/performance-log.service';

@Component({
  selector: 'rx-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTableComponent implements AfterViewChecked {
  @Input() rows: WorldBankDto[];

  private start: number;

  constructor(private pls: PerformanceLogService) {
    this.start = window.performance.now();
  }

  ngAfterViewChecked(): void {
    this.pls.duration('SimpleTableComponent ngAfterViewChecked', this.start);
  }
}
