import {
  Component,
  Input
} from '@angular/core';
import { WorldBankDto } from '../../core/domain/world-bank';

@Component({
  selector: 'rx-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input() rows: WorldBankDto[];
}
