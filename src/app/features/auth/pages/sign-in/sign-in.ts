import { Component, inject } from '@angular/core';
import { Button, Card, CardContent, CardFooter, CardHeader, InputComponent, Label, Link } from '@app/shared/components';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthStore } from '../../auth.store';
import { Router } from '@angular/router';

@Component({
  selector: 'rtr-sign-in',
  imports: [InputComponent, ReactiveFormsModule, Button, Link, Card, CardHeader, Label, CardContent, CardFooter],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
  providers: [AuthStore],
})
export class SignIn {
  authStore = inject(AuthStore);
  router = inject(Router);

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    console.debug('Form submitted:', this.signInForm.value);

    this.authStore
      .login({
        email: this.signInForm.value.email || '',
        password: this.signInForm.value.password || '',
      })
      .subscribe(token => {
        console.debug('Login successful:', token);
        this.router.navigate(['/chat']);
      });
  }
}
