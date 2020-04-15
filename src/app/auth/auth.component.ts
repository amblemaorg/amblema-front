import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-auth',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link" aria-label="Back">
                <i class="icon nb-arrow-thin-left"></i>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthComponent extends NbAuthComponent {
  constructor(
    private iconLibraries: NbIconLibraries,
    authService: NbAuthService,
    location: Location
  ) {
    super(authService, location);
  }
}
