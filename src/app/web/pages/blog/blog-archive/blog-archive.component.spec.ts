import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';
import { BlogArchiveComponent } from './blog-archive.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from '../post-card/post-card.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('BlogArchiveComponent', () => {
  let component: BlogArchiveComponent;
  let fixture: ComponentFixture<BlogArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogArchiveComponent,
        PostCardComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create blog page', () => {
    expect(component).toBeTruthy();
  });

  it('should create at less and only one h1 tag', () => {
    const h1Count = fixture.nativeElement.querySelectorAll('h1').lenght;
    expect(h1Count).toBe(1);
  });

  it('should create a h1 tag in cover section with content "Bienvenidos"', () => {
    const h1Tag = fixture.nativeElement.querySelector('section.cover h1');
    expect(h1Tag).toBeTruthy();
    expect(h1Tag.textContent).toBe('Bienvenidos');
  });
});
