import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StepsService } from './steps.service';

describe('StepsService', () => {  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: StepsService = TestBed.get(StepsService);
    expect(service).toBeTruthy();
  });
});