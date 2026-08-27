import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../commons/services/product-service';
import { ProductInterface } from '../interfaces/product.interface';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  public products: ProductInterface[] = [];

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
    });
  }
}
