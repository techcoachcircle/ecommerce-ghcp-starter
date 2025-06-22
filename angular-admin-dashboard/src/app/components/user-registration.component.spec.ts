import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserRegistrationService } from '../services/user-registration.service';
import { By } from '@angular/platform-browser';
import { UserRegistrationComponent } from './user-registration.component';

// High-level UI tests for the UserRegistrationComponent

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, UserRegistrationComponent],
      providers: [UserRegistrationService],
    }).compileComponents();
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit valid registration form and show success', fakeAsync(() => {
    component.form.setValue({
      email: 'test@example.com',
      password: 'Password123',
      name: 'Test User',
      address: '123 Main St',
      phone: '+1234567890',
      role: 'Customer',
    });
    fixture.detectChanges();
    component.onSubmit();
    const req = httpMock.expectOne('/users/register');
    expect(req.request.method).toBe('POST');
    req.flush({
      id: 'uuid-123',
      email: 'test@example.com',
      role: 'Customer',
      createdAt: new Date().toISOString(),
      profile: {
        name: 'Test User',
        address: '123 Main St',
        phone: '+1234567890',
        avatarUrl: '',
        dateOfBirth: '',
      },
    }, { status: 201, statusText: 'Created' });
    tick();
    expect(component.success).toBeTrue();
    expect(component.error).toBeFalsy();
  }));

  it('should show error for missing required fields', fakeAsync(() => {
    component.form.setValue({ email: '', password: '', name: '', address: '', phone: '', role: 'Customer' });
    fixture.detectChanges();
    component.onSubmit();
    // No HTTP request should be made
    httpMock.expectNone('/users/register');
    tick();
    expect(component.success).toBeFalsy();
    expect(component.error).toContain('invalid');
  }));

  it('should show error for weak password', fakeAsync(() => {
    component.form.setValue({ email: 'weak@example.com', password: '123', name: 'Weak Password', address: '', phone: '', role: 'Customer' });
    fixture.detectChanges();
    component.onSubmit();
    const req = httpMock.expectOne('/users/register');
    req.flush({ error: 'BadRequest', message: 'Password does not meet complexity requirements' }, { status: 400, statusText: 'Bad Request' });
    tick();
    expect(component.success).toBeFalsy();
    expect(component.error).toContain('Password does not meet complexity requirements');
  }));

  it('should show error for duplicate email', fakeAsync(() => {
    component.form.setValue({ email: 'duplicate@example.com', password: 'Password123', name: 'Duplicate User', address: '', phone: '', role: 'Customer' });
    fixture.detectChanges();
    component.onSubmit();
    const req = httpMock.expectOne('/users/register');
    req.flush({ error: 'Conflict', message: 'Email already exists' }, { status: 409, statusText: 'Conflict' });
    tick();
    expect(component.success).toBeFalsy();
    expect(component.error).toContain('Email already exists');
  }));

  it('should show error for invalid phone format', fakeAsync(() => {
    component.form.setValue({ email: 'phonefail@example.com', password: 'Password123', name: 'Phone Fail', address: '', phone: 'invalid-phone', role: 'Customer' });
    fixture.detectChanges();
    component.onSubmit();
    const req = httpMock.expectOne('/users/register');
    req.flush({ error: 'UnprocessableEntity', message: 'Invalid phone format' }, { status: 422, statusText: 'Unprocessable Entity' });
    tick();
    expect(component.success).toBeFalsy();
    expect(component.error).toContain('Invalid phone format');
  }));

  it('should show error for rate limiting', fakeAsync(() => {
    component.form.setValue({ email: 'ratelimit@example.com', password: 'Password123', name: 'Rate Limit', address: '', phone: '', role: 'Customer' });
    fixture.detectChanges();
    component.onSubmit();
    const req = httpMock.expectOne('/users/register');
    req.flush({ error: 'TooManyRequests', message: 'Too many registration attempts' }, { status: 429, statusText: 'Too Many Requests' });
    tick();
    expect(component.success).toBeFalsy();
    expect(component.error).toContain('Too many registration attempts');
  }));

  it('should show error for server error', fakeAsync(() => {
    component.form.setValue({ email: 'servererror@example.com', password: 'Password123', name: 'Server Error', address: '', phone: '', role: 'Customer' });
    fixture.detectChanges();
    component.onSubmit();
    const req = httpMock.expectOne('/users/register');
    req.flush({ error: 'InternalServerError', message: 'Unexpected error occurred' }, { status: 500, statusText: 'Internal Server Error' });
    tick();
    expect(component.success).toBeFalsy();
    expect(component.error).toContain('Unexpected error occurred');
  }));
});
