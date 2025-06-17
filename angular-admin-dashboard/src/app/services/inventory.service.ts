import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:8080/inventory'; // Backend API

  constructor(private http: HttpClient) {}

  updateInventory(productId: number, stock: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${productId}`, { stock });
  }
}