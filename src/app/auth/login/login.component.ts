import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {

  extraSetting = {
    signUp: false,
    forgotPassword: false
  };

}
