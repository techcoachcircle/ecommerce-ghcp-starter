import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch order by id', () => {
    const mockOrder = { id: 1, userId: 2, productId: 3, quantity: 1, totalPrice: 100, status: 'Pending' };
    service.getOrderById('1').subscribe(order => {
      expect(order).toEqual(mockOrder);
    });
    const req = httpMock.expectOne('http://localhost:8080/orders/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockOrder);
  });
});
