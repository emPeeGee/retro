import { Component, effect, inject } from '@angular/core';
import { Button, Card, CardContent, CardFooter, CardHeader, InputComponent, Label, Link } from '@app/shared/components';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthStore } from '@app/core/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'rtr-sign-in',
  imports: [InputComponent, ReactiveFormsModule, Button, Link, Card, CardHeader, Label, CardContent, CardFooter],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  authStore = inject(AuthStore);
  router = inject(Router);

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
    effect(() => {
      // Is the user authenticated? If so, redirect to the chat page.
      if (this.authStore.isAuthenticated()) {
        this.router.navigate(['/chat']);
      }
    });
  }

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
