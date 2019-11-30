import { TestBed, inject } from '@angular/core/testing';

import { SearchHotelService } from './search-hotel.service';

describe('SearchHotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchHotelService]
    });
  });

  it('should be created', inject([SearchHotelService], (service: SearchHotelService) => {
    expect(service).toBeTruthy();
  }));
});
