import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartlength: any;
  notification: any;
  
  constructor(private router: Router,private cartService: Product) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.notification = res.length;
      this.cartlength=res.length
    })
    console.log(this.cartlength,"cartpage");
  }
  navbaractive = true;

  navcollapse() {
    this.navbaractive = !this.navbaractive;
  
  }
  cartpage(){
    if(this.cartlength>0){
      this.router.navigate(['/cart'])
    }
    else{
      
    }
   
  }
}
