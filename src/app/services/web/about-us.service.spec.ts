import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsService } from './about-us.service';

describe('AboutUsService', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: AboutUsService = TestBed.get(AboutUsService);
    expect(service).toBeTruthy();
  });
});
