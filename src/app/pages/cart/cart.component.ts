import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
// import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  count: any
  cartreceivedata: any;
  subtotal: any;
  id: any;
  cartviewdata: any = []
  checkid: any;
  countprice: any;
  countincrementprice: any;
  totalprice = 0
  // addingprice : any;
  constructor(private route: ActivatedRoute, private router: Router,private service : Product) { }

  ngOnInit(): void {
    this.cartreceivedata = this.service.productsInCart;
    for (let product of this.cartreceivedata) {
      this.id = product.id;
      console.log(this.id);
    }


    this.cartreceivedata.forEach((_element: any) => {
      if(this.totalprice == NaN){
      this.totalprice = this.totalprice+_element.countingprice
         
      }
      console.log(   this.totalprice += _element.countingprice);
      
    }); 

// array.forEach(element => {
  
// });

    // // this.totalprice=this.totalprice+this.addingprice

    // console.log(this.totalprice=this.totalprice+this.addingprice);
   
  // this.cartreceivedata.array.forEach(element => {
  //     this.totalprice 
  // });
    // for (let item of this.cartviewdata) {
    //   this.checkid = item.id
    //   console.log(this.checkid);

    //   if (this.id == this.checkid) {
    //     this.cartviewdata != this.cartreceivedata
    //   }
    //   else
    //     this.cartviewdata = this.cartreceivedata
    // }
    // _.forEach(this.cartreceivedata(this.countingprice) 
    // { console.log(num); });
    //  this.totalamount()  
  }
  
//   totalamount(){
//     var total = 0;
//     for (var i = 0; i < this.cartreceivedata.length; i++) {
//            total = total +this.cartreceivedata.countingprice[i];
//          }
//  console.log( total = total +this.cartreceivedata.countingprice[i]);

//     return total;
// }
  increment(data: any) {
  

    data.count = data.count + 1
    data.countingprice=data.count*data.price
    this.subtotal=data.price
      // this.totalprice=this.totalprice+data.price
      // console.log(this.totalprice);
      // this.cartreceivedata.forEach((_element: any) => {
      //   this.totalprice =_element.countingprice
      //   console.log(   this.totalprice += _element.countingprice);
      //   }); 
      this.totalprice = data.price+this.totalprice
  }

  decrement(data: any) {
      if (data.count < 1) {
        data.count = 1
      }
    data.count = data.count - 1
    if(data.count>1){
      data.countingprice=data.countingprice-data.price
    }
    else(
      data.countingprice=data.price
    )
      
    this.totalprice = this.totalprice-data.price
    
      
    console.log(data.price);
  }
 
}
