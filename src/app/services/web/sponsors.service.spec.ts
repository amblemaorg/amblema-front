import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SponsorService } from './sponsors.service';

describe('SponsorsService', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: SponsorService = TestBed.get(SponsorService);
    expect(service).toBeTruthy();
  });
});
