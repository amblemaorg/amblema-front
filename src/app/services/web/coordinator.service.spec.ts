import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CoordinatorService } from './coordinator.service';

describe('CoordinatorsService', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: CoordinatorService = TestBed.get(CoordinatorService);
    expect(service).toBeTruthy();
  });
});
