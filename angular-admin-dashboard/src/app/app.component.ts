import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { InventoryManagementComponent } from './components/inventory-management/inventory-management.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OrderListComponent, InventoryManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin-dashboard';
}
