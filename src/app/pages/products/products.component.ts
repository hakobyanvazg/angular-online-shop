import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  name: any;
  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.productSrv
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.products = this.products.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }

  remove(id: number) {
    this.productSrv.removeProduct(id).subscribe({
      next: (data) => {
        this.products = this.products.filter((_) => _.id !== id);
      },
    });
  }
}
