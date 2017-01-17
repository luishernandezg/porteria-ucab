/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataBaseService } from './data-base.service';

describe('DataBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBaseService]
    });
  });

  it('should ...', inject([DataBaseService], (service: DataBaseService) => {
    expect(service).toBeTruthy();
  }));
});
