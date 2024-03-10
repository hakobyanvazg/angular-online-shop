import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  name:any = ""
  constructor() { }

  ngOnInit(): void {
    console.log(5);
    
  }

  Search(){
    if(this.name == ""){
       this.ngOnInit()
    }else{
      
    }
  }
}
