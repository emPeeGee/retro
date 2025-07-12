import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
  http = inject(HttpClient);

  getMe(): Observable<User> {
    return this.http.get<User>('api/users/me');
  }
}
