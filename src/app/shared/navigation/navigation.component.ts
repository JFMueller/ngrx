import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  UrlSegment
} from '@angular/router';
import { RouterLinkListItem } from '../../core/viewmodels/router-link-list-item';
import { NavigationService } from './navigation.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rx-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [NavigationService]
})
export class NavigationComponent implements OnInit {
  mainRouterLink$: Observable<RouterLinkListItem>;
  listItems$: Observable<RouterLinkListItem[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.listItems$ = this.activatedRoute.url
      .map((urlSegments: UrlSegment[]) => urlSegments[0].path)
      .switchMap((path: string) => this.navigationService.createListItemsForPath(path));

    this.mainRouterLink$ = this.activatedRoute.url
      .map((urlSegments: UrlSegment[]) => urlSegments[0].path)
      .map((path: string) => this.navigationService.createMainRouterLink(path));
  }
}
