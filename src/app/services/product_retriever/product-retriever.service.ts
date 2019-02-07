import { Injectable } from '@angular/core';
import MOCK_DATA from '../../../assets/MOCK_DATA.json';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductRetrieverService {
  products: Product[];

  constructor() {
    this.products = [];
    this.convertToProducts();
  }

  getProducts() {
    return this.products;
  }

  convertToProducts() {
    for (const jsonProduct of MOCK_DATA) {
      const product = new Product(jsonProduct.id, jsonProduct.model, jsonProduct.make, jsonProduct.year, jsonProduct.vin);
      this.products.push(product);
    }
  }
}
