import { browser, element, by } from 'protractor';

export class BookreaderPage {
  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('https://mlbors.github.io/bookreader/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
