import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });
});
