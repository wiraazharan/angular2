import { SampleappangularPage } from './app.po';

describe('sampleappangular App', function() {
  let page: SampleappangularPage;

  beforeEach(() => {
    page = new SampleappangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sampleappangular works!');
  });
});
