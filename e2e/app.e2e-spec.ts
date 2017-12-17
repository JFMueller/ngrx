import { AppPage } from './app.po';

describe('Clone & ngrx performance app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHomeH2()).toEqual('RxJS & JavaScript performance measurements');
  });
});
