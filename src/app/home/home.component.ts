import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  products: Products[] = [];
  selectedCategory: string = "men's clothing"; 

  
  constructor(private productService: ProductService, private cartservice: CartService) {}
 
  ngOnInit(): void {
    // Fetch all products
    this.productService.getproduct().subscribe((data: Products[]) => {
      this.products = data;
    });
  }
  
  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }
  
  addToCart(product: Products): void {
    this.cartservice.addtocart(product);
  }
}