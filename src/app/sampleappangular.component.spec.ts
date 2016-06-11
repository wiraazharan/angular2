import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SampleappangularAppComponent } from '../app/sampleappangular.component';

beforeEachProviders(() => [SampleappangularAppComponent]);

describe('App: Sampleappangular', () => {
  it('should create the app',
      inject([SampleappangularAppComponent], (app: SampleappangularAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sampleappangular works!\'',
      inject([SampleappangularAppComponent], (app: SampleappangularAppComponent) => {
    expect(app.title).toEqual('sampleappangular works!');
  }));
});
