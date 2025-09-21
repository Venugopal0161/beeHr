import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('user-data')) {
      console.log('heeee', window.location.pathname);
    
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
