import { Component, OnInit } from '@angular/core';
import {ProductRetrieverService} from '../../services/product_retriever/product-retriever.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[];
  makes: string[];
  models: string[];
  makeCheckboxes: any[];
  modelCheckBoxes: any[];
  selectedMakes: string[];
  selectedModels: string[];

  constructor(productService: ProductRetrieverService) {
    this.products = productService.getProducts();
    this.makes = productService.getMakeList();
    this.models = productService.getModelList();
    this.makeCheckboxes = [];
    this.modelCheckBoxes = [];
    this.selectedMakes = [];
    this.selectedModels = [];
    this.initializeCheckboxes();
  }

  ngOnInit() {
  }

  initializeCheckboxes() {
    for (const make of this.makes) {
      this.makeCheckboxes.push({'make': make, 'checked': false});
    }

    for (const model of this.models) {
      this.modelCheckBoxes.push({'model': model, 'checked': false});
    }
  }

  onMakeSelection(type: string, value: string, event: any) {
    if (type === 'make') {
      if (event.target.checked === true) {
        this.selectedMakes.push(value);
      } else {
        const index = this.selectedMakes.indexOf(value);
        if (index !== -1) {
          this.selectedMakes.splice(index, 1);
        }
      }
    } else if (type === 'model') {
      if (event.target.checked === true) {
        this.selectedModels.push(value);
      } else {
        const index = this.selectedModels.indexOf(value);
        if (index !== -1) {
          this.selectedModels.splice(index, 1);
        }
      }
    }
  }
}
