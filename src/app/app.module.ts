import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PurchasePageComponent } from './components/purchase-page/purchase-page.component';
import {RouterModule, Routes} from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductTableComponent,
    PurchasePageComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'purchase',
      component: PurchasePageComponent
      },
      {path: 'payment',
       component: PaymentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const appRoutes: Routes = [
  { path: 'purchase', component: PurchasePageComponent},
  {path: 'payment', component: PaymentComponent}
];
