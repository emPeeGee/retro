import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);

  login(payload: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('api/Auth/login', payload);
  }

  // logout(): void {
  //   localStorage.removeItem('token');
  // }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
