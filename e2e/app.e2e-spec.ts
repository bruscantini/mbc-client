import { MbcAppPage } from './app.po';

describe('mbc-app App', () => {
  let page: MbcAppPage;

  beforeEach(() => {
    page = new MbcAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mbc works!');
  });
});
