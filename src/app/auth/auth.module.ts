import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule,
  NbButtonModule,
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule
}
from '@nebular/theme';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken
}
from '@nebular/auth';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { environment } from 'src/environments/environment.prod';

const authStrategies = [
  NbPasswordAuthStrategy.setup({
    name: 'email',
    baseEndpoint: `${environment.baseUrl}`,
    token: {
      class: NbAuthJWTToken,
      key: 'access_token'
    },
    login: {
      endpoint: 'auth/login',
      method: 'post',
      redirect: {
        success: 'peca',
        failure: null
      },
      defaultErrors: ['La combinación de inicio de sesión / correo electrónico no es correcta, intente nuevamente.'],
      defaultMessages: ['Has ingresado exitosamente. Te estamos redirigiendo al PECA...'],
    },
  }),
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ResetPasswordComponent,
    RequestPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    NbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: authStrategies,
      forms: {},
    }),
  ]
})
export class AuthModule { }
