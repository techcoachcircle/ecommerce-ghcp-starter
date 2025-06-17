import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-search.component.html',
  styles: [`
    .order-search { margin: 2rem 0; }
    input { margin-right: 0.5rem; }
    .order-details { margin-top: 1rem; }
    .error { color: red; margin-top: 0.5rem; }
    table td { padding: 0.25rem 0.75rem 0.25rem 0; }
  `]
})
export class OrderSearchComponent {
  orderId: string = '';
  order: any = null;
  loading = false;
  error: string | null = null;

  constructor(private orderService: OrderService) {}

  searchOrder() {
    if (!this.orderId) return;
    this.loading = true;
    this.error = null;
    this.order = null;
    this.orderService.getOrderById(this.orderId)
      .subscribe({
        next: (data) => {
          this.order = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Order not found or error occurred.';
          this.loading = false;
        }
      });
  }
}
