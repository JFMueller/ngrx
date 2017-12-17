import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHomeH2() {
    return element(by.css('rx-home > h2')).getText();
  }
}
