import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserRegistrationRequest {
  email: string;
  password: string;
  name: string;
  address?: string;
  phone?: string;
  role?: 'Customer' | 'Seller' | 'Admin';
}

export interface UserProfile {
  name: string;
  address?: string;
  phone?: string;
  avatarUrl?: string;
  dateOfBirth?: string;
}

export interface UserResponse {
  id: string;
  email: string;
  role: 'Customer' | 'Seller' | 'Admin';
  createdAt: string;
  profile: UserProfile;
}

export interface ErrorResponse {
  error: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class UserRegistrationService {
  private apiUrl = '/users/register';

  constructor(private http: HttpClient) {}

  registerUser(data: UserRegistrationRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.apiUrl, data);
  }
}
