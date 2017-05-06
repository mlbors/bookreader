import { BookreaderPage } from './app.po';

describe('bookreader App', () => {
  let page: BookreaderPage;

  beforeEach(() => {
    page = new BookreaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
