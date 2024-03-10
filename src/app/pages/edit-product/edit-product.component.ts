import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private productSrv:ProductService,private router:Router, private route:ActivatedRoute) { }

  productForm:Product = {
    id:0,
    name:"",
    price:0,
    description:"",
    imageUrl:""
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'))
      this.getById(id)
    })
  }

  getById(id:number){
    this.productSrv.edit(id).subscribe((data) => {
      this.productForm = data
    })
  }

  update(){
    this.productSrv.update(this.productForm).subscribe({
      next: (data) => {
        this.router.navigate(["/products"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
