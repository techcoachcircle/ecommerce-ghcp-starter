import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

// This is a high-level UI test suite for the User Registration API client.
describe('User Registration API UI Client', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;
  const apiUrl = '/users/register';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // Positive case: valid registration
  it('should register a new user with valid data', () => {
    const registrationData = {
      email: 'test@example.com',
      password: 'Password123',
      name: 'Test User',
      address: '123 Main St',
      phone: '+1234567890',
      role: 'Customer',
    };
    const mockResponse = {
      id: 'uuid-123',
      email: registrationData.email,
      role: registrationData.role,
      createdAt: new Date().toISOString(),
      profile: {
        name: registrationData.name,
        address: registrationData.address,
        phone: registrationData.phone,
        avatarUrl: '',
        dateOfBirth: '',
      },
    };
    http.post(apiUrl, registrationData).subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse, { status: 201, statusText: 'Created' });
  });

  // Negative case: missing required fields
  it('should fail if required fields are missing', () => {
    const registrationData = { email: '', password: '', name: '' };
    const errorResponse = {
      error: 'BadRequest',
      message: 'Missing required fields',
    };
    http.post(apiUrl, registrationData).subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err.status).toBe(400);
        expect(err.error).toEqual(errorResponse);
      },
    });
    const req = httpMock.expectOne(apiUrl);
    req.flush(errorResponse, { status: 400, statusText: 'Bad Request' });
  });

  // Negative case: weak password
  it('should fail if password is too weak', () => {
    const registrationData = {
      email: 'weak@example.com',
      password: '123',
      name: 'Weak Password',
    };
    const errorResponse = {
      error: 'BadRequest',
      message: 'Password does not meet complexity requirements',
    };
    http.post(apiUrl, registrationData).subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err.status).toBe(400);
        expect(err.error).toEqual(errorResponse);
      },
    });
    const req = httpMock.expectOne(apiUrl);
    req.flush(errorResponse, { status: 400, statusText: 'Bad Request' });
  });

  // Negative case: duplicate email
  it('should fail if email already exists', () => {
    const registrationData = {
      email: 'duplicate@example.com',
      password: 'Password123',
      name: 'Duplicate User',
    };
    const errorResponse = {
      error: 'Conflict',
      message: 'Email already exists',
    };
    http.post(apiUrl, registrationData).subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err.status).toBe(409);
        expect(err.error).toEqual(errorResponse);
      },
    });
    const req = httpMock.expectOne(apiUrl);
    req.flush(errorResponse, { status: 409, statusText: 'Conflict' });
  });

  // Corner case: invalid phone format
  it('should fail if phone format is invalid', () => {
    const registrationData = {
      email: 'phonefail@example.com',
      password: 'Password123',
      name: 'Phone Fail',
      phone: 'invalid-phone',
    };
    const errorResponse = {
      error: 'UnprocessableEntity',
      message: 'Invalid phone format',
    };
    http.post(apiUrl, registrationData).subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err.status).toBe(422);
        expect(err.error).toEqual(errorResponse);
      },
    });
    const req = httpMock.expectOne(apiUrl);
    req.flush(errorResponse, { status: 422, statusText: 'Unprocessable Entity' });
  });

  // Corner case: rate limit exceeded
  it('should handle rate limiting', () => {
    const registrationData = {
      email: 'ratelimit@example.com',
      password: 'Password123',
      name: 'Rate Limit',
    };
    const errorResponse = {
      error: 'TooManyRequests',
      message: 'Too many registration attempts',
    };
    http.post(apiUrl, registrationData).subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err.status).toBe(429);
        expect(err.error).toEqual(errorResponse);
      },
    });
    const req = httpMock.expectOne(apiUrl);
    req.flush(errorResponse, { status: 429, statusText: 'Too Many Requests' });
  });

  // Corner case: server error
  it('should handle server errors', () => {
    const registrationData = {
      email: 'servererror@example.com',
      password: 'Password123',
      name: 'Server Error',
    };
    const errorResponse = {
      error: 'InternalServerError',
      message: 'Unexpected error occurred',
    };
    http.post(apiUrl, registrationData).subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err.status).toBe(500);
        expect(err.error).toEqual(errorResponse);
      },
    });
    const req = httpMock.expectOne(apiUrl);
    req.flush(errorResponse, { status: 500, statusText: 'Internal Server Error' });
  });
});
