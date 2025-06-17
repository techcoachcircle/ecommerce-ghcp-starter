import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss'],
  imports: [FormsModule],
})
export class InventoryManagementComponent {
  productId: number = 0;
  stock: number = 0;
  updateMessage: string = '';

  constructor(private inventoryService: InventoryService) {}

  updateStock(): void {
    this.inventoryService.updateInventory(this.productId, this.stock).subscribe(response => {
      this.updateMessage = 'Inventory updated successfully!';
    });
  }
}