import { browser, element, by } from 'protractor';

export class MbcAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mbc-root h1')).getText();
  }
}
