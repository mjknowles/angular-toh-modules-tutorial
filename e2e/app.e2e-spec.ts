import { TohModulesTutorialPage } from './app.po';

describe('toh-modules-tutorial App', () => {
  let page: TohModulesTutorialPage;

  beforeEach(() => {
    page = new TohModulesTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
