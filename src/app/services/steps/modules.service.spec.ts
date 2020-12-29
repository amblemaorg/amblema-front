import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ModulesService } from './modules.service';

describe('ModulesService', () => {  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: ModulesService = TestBed.get(ModulesService);
    expect(service).toBeTruthy();
  });
});