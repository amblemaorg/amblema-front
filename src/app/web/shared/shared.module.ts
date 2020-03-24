import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgSelectModule } from '@ng-select/ng-select';
// Components
import { BgHeadingComponent } from './bg-heading/bg-heading.component';
import { CoverComponent } from './cover/cover.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { FormConfirmationComponent } from './forms/elements/form-confirmation.component';
import { FormValidationComponent } from './forms/elements/form-validation.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FormWizardComponent } from './forms/form-wizard/form-wizard.component';
import { ImplementedFormsComponent } from './forms/implemented-forms.component';

@NgModule({
  declarations: [
    BgHeadingComponent,
    CoverComponent,
    TestimonialCardComponent,
    OffcanvasComponent,
    FormConfirmationComponent,
    FormValidationComponent,
    FormWizardComponent,
    ImplementedFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    OwlModule,
    CarouselModule
  ],
  exports: [
    BgHeadingComponent,
    CoverComponent,
    TestimonialCardComponent,
    OffcanvasComponent,
    FormConfirmationComponent,
    FormWizardComponent,
    ImplementedFormsComponent
  ]
})
export class SharedModule { }
