import { RouterLinkListItem } from '../../core/viewmodels/router-link-list-item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavigationService {
  createListItemsForPath(path: string): Observable<RouterLinkListItem[]> {
    if (path === 'ngrx-performance') {
      return Observable.from([1, 10, 100, 1000, 10000, 100000])
        .map((amount: number) => Object.assign({
          url: path,
          count: amount,
          text: `${amount} actions`
        }))
        .toArray();
    } else if (path === 'clone-performance') {
      return Observable.from([1, 10, 100, 1000, 10000])
        .map((amount: number) => Object.assign({
          url: path,
          count: amount,
          text: `${amount} elements`
        }))
        .toArray();
    } else {
      return Observable.empty<RouterLinkListItem[]>();
    }
  }

  createMainRouterLink(path: string): RouterLinkListItem {
    if (path === 'ngrx-performance') {
      return Object.assign({
        text: 'ngrx Performance',
        url: path
      });
    } else if (path === 'clone-performance') {
      return Object.assign({
        text: 'Deep & shallow clone performance',
        url: path
      });
    } else {
      return null;
    }
  }
}
