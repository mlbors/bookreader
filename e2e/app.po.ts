import { browser, element, by } from 'protractor';

export class BookreaderPage {
  navigateTo() {
    return browser.get('/bookreader');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
