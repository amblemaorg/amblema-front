import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPostComponent } from './blog-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/web/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRouteStub } from 'src/assets/tests/activated-route-stub';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from 'src/app/services/web/blog.service';

describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;
  let activatedRoute = new ActivatedRouteStub;
  let getPostSpy;

  const post = {
    mainImage: './assets/images/background-pillar-matematica.jpg',
    secondaryImage: '',
    slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento',
    title: 'La capacitación en matemáticas induce al docente en el razonamiento',
    content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
    date: '18-02-2020',
    tags: ['Empezando', 'Tu comunidad'],
    status: 'published'
  }

  beforeEach(async(() => {
    const blogService = jasmine.createSpyObj('BlogService', ['getPostBySlugJSON']);
    getPostSpy = blogService.getPostBySlugJSON.and.returnValue(of(post));

    TestBed.configureTestingModule({
      declarations: [ BlogPostComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        SharedModule
      ],
      providers: [
        { provide: BlogService, useValue: blogService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.setParamMap({ postSlug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento' });
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and call getPostBySlugJSON() function in BlogService', () => {
    expect(getPostSpy.calls.any()).toBe(true, 'getPostBySlugJSON is called');
    expect(component).toBeTruthy();
  });
});
