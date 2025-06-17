import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrderById(orderId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/orders/${orderId}`);
  }
}
