import { TanzenMusicPage } from './app.po';

describe('TanzenMusic App', function() {
  let page: TanzenMusicPage;

  beforeEach(() => {
    page = new TanzenMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
