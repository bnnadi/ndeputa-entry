import { Component } from '@angular/core';
import { AuthService } from 'app/providers/auth.service';
import { Router } from '@angular/router';
import { window } from 'rxjs/operator/window';
import { ElectronService } from 'app/providers/electron.service';

@Component({
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private as: AuthService, private es: ElectronService, public router: Router) {}

  authorize(form) {
    this.es.set('apikey', form.key);
    this.as.authentication().subscribe((response) => {
      console.log(this.as.isAuthenticated());
      if (this.as.isAuthenticated()) {
        console.log('Authenticated')
        this.router.navigate(['/']);
      }
    });
  }

}
