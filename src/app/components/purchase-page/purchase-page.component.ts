import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.css']
})
export class PurchasePageComponent implements OnInit {

  constructor(private router: Router) {


  }

  ngOnInit() {
  }

}
