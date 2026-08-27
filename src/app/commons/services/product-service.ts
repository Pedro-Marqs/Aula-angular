import { Injectable } from '@angular/core';
import { ProductInterface } from '../../features/product/interfaces/product.interface';
import { Observable } from 'rxjs';
import { inject } from '@angular/core/primitives/di';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dummyjson.com/PRODUCTS';

  public getProducts(): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(this.apiUrl);
  }
}
