import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router  ) {}
  username: string = '';
  password: string = '';

  onSignUpClick() {
    this.router.navigate(['/first-time-login']);
  }
  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Handle success, navigate to dashboard or home page
        console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        // Handle error, display message to user
        console.error('Login failed', err);
      }
    });
  }

}
