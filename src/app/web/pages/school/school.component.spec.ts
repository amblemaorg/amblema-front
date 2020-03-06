import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolComponent } from './school.component';
import { SchoolsMapComponent } from './schools-map/schools-map.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SchoolComponent', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchoolComponent,
        SchoolsMapComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
