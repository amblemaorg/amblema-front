import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment.prod';

// states
import { ModulesState } from './store/states/e-learning/learning-modules.state';
import { UserState } from './store/states/e-learning/user.state';
import { StepsState } from './store/states/steps/project.state';
import { ResidenceInfoState } from './store/states/steps/residence-info.state';
//

import { EmbedVideo } from 'ngx-embed-video';
import { AuthGuard } from './guards/auth.guard';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    NbAuthModule.forRoot(),
    // -- NGXS --
    NgxsModule.forRoot( [
      ModulesState,
      UserState,
      StepsState,
      ResidenceInfoState,
    ],
    {
      compatibility: {
        strictContentSecurityPolicy: true
      },
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({}),
    EmbedVideo.forRoot(),
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
