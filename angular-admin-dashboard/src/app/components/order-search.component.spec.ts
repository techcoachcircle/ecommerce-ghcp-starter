import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OrderSearchComponent } from './order-search.component';
import { OrderService } from '../services/order.service';
import { FormsModule } from '@angular/forms';

describe('OrderSearchComponent', () => {
  let component: OrderSearchComponent;
  let fixture: ComponentFixture<OrderSearchComponent>;
  let orderServiceSpy: jasmine.SpyObj<OrderService>;

  beforeEach(waitForAsync(() => {
    orderServiceSpy = jasmine.createSpyObj('OrderService', ['getOrderById']);
    TestBed.configureTestingModule({
      imports: [OrderSearchComponent, FormsModule],
      providers: [{ provide: OrderService, useValue: orderServiceSpy }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
