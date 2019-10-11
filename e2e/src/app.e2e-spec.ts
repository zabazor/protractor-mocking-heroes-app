import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Tour of Heroes');
  });

  it('should go to the Heroes Page from the Dashboard with the Heroes Link', () => {
    page.navigateTo();
    let heroesLink = element(by.css('#heroes-link'));
    heroesLink.click();
    let header2 = element(by.tagName('h2'));
    let header2Text = header2.getText();
    expect(header2Text).toBe('My Heroes');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
