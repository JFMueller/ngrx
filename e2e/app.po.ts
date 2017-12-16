import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstLink() {
    return element(by.css('app-home ul li:nth-child(1) > a:nth-child(1)')).getText();
  }
}
