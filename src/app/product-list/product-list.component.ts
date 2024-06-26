import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [

    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 100 },
    
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 200 },
    
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 300 }
    
    ];

    selectedProduct: any;   // Data 

    selectProduct(product: any) {
      this.selectedProduct = product;
    }

}
