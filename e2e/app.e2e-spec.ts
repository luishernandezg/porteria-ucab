import { PorteriaUcabPage } from './app.po';

describe('porteria-ucab App', function() {
  let page: PorteriaUcabPage;

  beforeEach(() => {
    page = new PorteriaUcabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
