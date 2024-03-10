import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
