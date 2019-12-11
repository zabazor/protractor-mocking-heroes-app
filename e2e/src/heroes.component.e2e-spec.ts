import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';


describe('heroes.component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get('/heroes');
  });

  it('should go to the Heroes Page directly', () => {
    let header2 = element(by.tagName('h2'));
    let header2Text = header2.getText();
    expect(header2Text).toBe('My Heroes');
  });

  it('should confirm the name of hero.id=11 with "real" data', () => {
    let heroId = 11;
    let hero11Link = element(by.css(`#hero${heroId}`));
    let hero11NameSpan = hero11Link.element(by.css(`.hero-name`));
    let hero11Name = hero11NameSpan.getText();
    expect(hero11Name).toBe('Whimp');
  });

  it('should confirm the name of hero.id=16 with "real" data', () => {
    let heroId = 16;
    let hero16Link = element(by.css(`#hero${heroId}`));
    let hero16NameSpan = hero16Link.element(by.css(`.hero-name`));
    let hero16Name = hero16NameSpan.getText();
    expect(hero16Name).toBe('D\'Feet');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});