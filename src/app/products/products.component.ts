import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  addToCart(product: Products): void {
    // Implement your logic to add the product to the cart
  }
  product: Products[] = [
    { id: 1, title : 'Product 1', price: 10.99 },
    { id: 2, title: 'Product 2', price: 19.99 },
    // Add more products as needed
  ];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getproduct().subscribe(
      (data: Products[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}

