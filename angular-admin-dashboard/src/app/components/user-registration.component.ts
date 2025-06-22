import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styles: [`
    .registration-container {
      max-width: 400px;
      margin: 40px auto;
      padding: 2rem 2.5rem;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #2d3748;
    }
    .form-group {
      margin-bottom: 1.2rem;
    }
    label {
      display: block;
      margin-bottom: 0.4rem;
      color: #4a5568;
      font-weight: 500;
    }
    input, select {
      width: 100%;
      padding: 0.6rem 0.8rem;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-size: 1rem;
      background: #f9fafb;
      transition: border 0.2s;
    }
    input:focus, select:focus {
      border-color: #3182ce;
      outline: none;
      background: #fff;
    }
    button {
      width: 100%;
      padding: 0.8rem;
      background: linear-gradient(90deg, #3182ce 0%, #63b3ed 100%);
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      margin-top: 0.5rem;
      transition: background 0.2s;
    }
    button:disabled {
      background: #cbd5e1;
      cursor: not-allowed;
    }
    .success-message {
      margin-top: 1.2rem;
      color: #38a169;
      text-align: center;
      font-weight: 500;
    }
    .error-message {
      margin-top: 1.2rem;
      color: #e53e3e;
      text-align: center;
      font-weight: 500;
    }
  `],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserRegistrationComponent {
  form: FormGroup;
  success = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userRegistrationService: UserRegistrationService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: [''],
      phone: [''],
      role: ['Customer'],
    });
    // Set the API base URL for the service if needed
    this.userRegistrationService['apiUrl'] = 'http://localhost:8082/users/register';
  }

  onSubmit() {
    this.success = false;
    this.error = null;
    if (this.form.invalid) {
      this.error = 'Form is invalid';
      return;
    }
    this.userRegistrationService.registerUser(this.form.value).subscribe({
      next: () => {
        this.success = true;
        this.error = null;
      },
      error: (err) => {
        this.success = false;
        this.error = err?.error?.message || 'Unknown error';
      },
    });
  }
}
