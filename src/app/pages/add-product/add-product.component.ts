import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm:Product = {
    id:0,
    name:"",
    price:0,
    description:"",
    imageUrl:""
  }
  constructor(private productSrv:ProductService,private router:Router) { }


  addProduct() {
    this.productSrv.getAllProducts().subscribe((data) => {
      const highestId = Math.max(...data.map(product => product.id))
      this.productForm.id = highestId + 1
      this.productSrv.addProduct(this.productForm).subscribe({
        next: (data) => {
          this.router.navigate(["/products"]);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }


  ngOnInit(): void {
    
  }

}
