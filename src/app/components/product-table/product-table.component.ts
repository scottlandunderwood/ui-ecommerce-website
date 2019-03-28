import { Component, OnInit } from '@angular/core';
import { ProductRetrieverService } from '../../services/product_retriever/product-retriever.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: Product[];

  constructor(productService: ProductRetrieverService) {
    this.products = productService.getProducts();
  }

  ngOnInit() { }

}
