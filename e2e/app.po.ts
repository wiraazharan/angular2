export class SampleappangularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sampleappangular-app h1')).getText();
  }
}
