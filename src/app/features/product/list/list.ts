import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../commons/services/product-service';
import { ProductInterface } from '../interfaces/product.interface';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list',
  imports: [MatTableModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  [x: string]: any;
  public products: ProductInterface[] = [];

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
    });
  }
}
