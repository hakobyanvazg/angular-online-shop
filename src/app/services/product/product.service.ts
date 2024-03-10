import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(Constant.API_END_POINT + 'products')
  }
  addProduct(data:Product){
    return this.http.post(Constant.API_END_POINT + 'products',data)
  }

  removeProduct(id:number){
    return this.http.delete<Product>(Constant.API_END_POINT + 'products/' + id)
  }
  
  edit(id:number){
    return this.http.get<Product>(Constant.API_END_POINT + 'products/' + id)

  }
  update(data:Product){
    return this.http.put<Product>(Constant.API_END_POINT + 'products/' + data.id,data)

  }
}
