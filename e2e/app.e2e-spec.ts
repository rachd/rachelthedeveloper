import { RachelthedeveloperPage } from './app.po';

describe('rachelthedeveloper App', () => {
  let page: RachelthedeveloperPage;

  beforeEach(() => {
    page = new RachelthedeveloperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
