import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ModulesService } from './modules.service';

describe('ModulesService', () => {  
  beforeEach(async(() => {
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