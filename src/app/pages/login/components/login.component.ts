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
  errorMessage: string = ''; // To show error message


  onSignUpClick() {
    this.router.navigate(['/first-time-login']);
  }
  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          // Assuming response.success is true for valid credentials
          this.router.navigate(['/home']); // Redirect to home page on successful login
        } else {
          this.errorMessage = 'Invalid username or password'; // Show error on invalid login
        }
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password'; // Handle any errors
      }
    });
  }

}
