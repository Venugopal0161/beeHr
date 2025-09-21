import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';
  constructor(private router: Router) {

  }

  handleSignin() {
    console.log('Signin attempt:', { email: this.email, password: this.password });
    this.router.navigateByUrl('/');
    localStorage.setItem('user-data','true')
  }

  onSwitchToSignup() {
    this.router.navigateByUrl('/auth/signup')
  }

}
