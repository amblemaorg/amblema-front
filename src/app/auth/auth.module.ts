import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule,
  NbButtonModule,
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule,
} from "@nebular/theme";
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthOAuth2Token } from "@nebular/auth";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RequestPasswordComponent } from "./request-password/request-password.component";
import { environment } from "src/environments/environment.prod";

const authStrategies = [
  NbPasswordAuthStrategy.setup({
    name: "email",
    baseEndpoint: `${environment.baseUrl}`,
    token: {
      class: NbAuthOAuth2Token,
      key: "token_access",
    },
    login: {
      endpoint: "auth/login?site=peca",
      method: "post",
      redirect: {
        success: "seleccion-escuela",
        failure: null,
      },
      defaultErrors: [
        "La combinación de inicio de sesión / correo electrónico no es correcta, intente nuevamente.",
      ],
      defaultMessages: ["Has ingresado exitosamente. Te estamos redirigiendo al PECA..."],
    },
    logout: {
      endpoint: null,
      redirect: {
        success: "/auth/login",
        failure: null,
      },
    },
    requestPass: {
      endpoint: 'auth/passwordrecovery',
      method: 'post',
      redirect: {
        success: '/auth/login',
        failure: null,
      },
      defaultErrors: ['El correo electrónico ingresado no está registrado'],
      defaultMessages: ['Su nueva contraseña ha sido enviada a su correo electrónico.'],
    }
  }),
];

const authForms = {
  login: {
    redirectDelay: 500,
    strategy: "email",
    rememberMe: true,
    showMessages: {
      success: true,
      error: true,
    },
  },
  logout: {
    redirectDelay: 500,
    strategy: "email",
  },
  validation: {
    password: {
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    email: {
      required: true,
    },
  },
};

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    ResetPasswordComponent,
    RequestPasswordComponent,
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
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbCardModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: authStrategies,
      forms: authForms,
    }),
  ],
})
export class AuthModule {}
