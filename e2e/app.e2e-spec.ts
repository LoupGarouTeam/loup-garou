import { LoupgarouPage } from './app.po';

describe('loupgarou App', () => {
  let page: LoupgarouPage;

  beforeEach(() => {
    page = new LoupgarouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
