import {
  async,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async(() => {
    // noinspection JSIgnoredPromiseFromCall
    // noinspection JSIgnoredPromiseFromCall
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'somewhere',
          component: PageNotFoundComponent
        }])
      ],
      declarations: [
        AppComponent,
        PageNotFoundComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should route to 'PageNotFoundComponent'`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(['somewhere']);
    tick();
    const pageNotFound = fixture.debugElement.query(By.directive(PageNotFoundComponent));
    expect(pageNotFound.nativeElement.innerHTML).toContain('<h1>Page does not exist</h1>');
    expect(pageNotFound.nativeElement.querySelector('p').textContent).toContain('Please check routing file');
  }));
});
