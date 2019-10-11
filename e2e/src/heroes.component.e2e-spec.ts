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

  // Start: Tests that use "real" data with the http service
  it('should confirm the name of hero.id=11 with "real" data', () => {
    let heroId = 11;
    let hero11Link = element(by.css(`#hero${heroId}`));
    let hero11NameSpan = hero11Link.element(by.css(`.hero-name`));
    let hero11Name = hero11NameSpan.getText();
    expect(hero11Name).toBe('Dr Nice');
  });

  it('should confirm the name of hero.id=16 with "real" data', () => {
    let heroId = 16;
    let hero16Link = element(by.css(`#hero${heroId}`));
    let hero16NameSpan = hero16Link.element(by.css(`.hero-name`));
    let hero16Name = hero16NameSpan.getText();
    expect(hero16Name).toBe('RubberMan');
  });
  // End: Tests that use "real" data with the http service


  // Start: Tests that use "Mocked" data
  it('should confirm the name of hero.id=11 with "real" data', () => {
    // browser.addMockModule('httpMocker', () => {
    //     angular.module('httpMocker', ['ngMockE2E'])
    //     .run(function($httpBackend) {
    //         $httpBackend.whenGET('api/heroes').respond(of(HEROESMock));
    //     });
    // });


    let heroId = 11;
    let hero11Link = element(by.css(`#hero${heroId}`));
    let hero11NameSpan = hero11Link.element(by.css(`.hero-name`));
    let hero11Name = hero11NameSpan.getText();
    expect(hero11Name).toBe('Dr Nice');
  });
  // End: Tests that use "Mocked" data



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});