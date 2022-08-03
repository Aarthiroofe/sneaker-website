import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
  @Injectable()

  export class Product {

      public cartItemList:any[]=[];
      public savelist = new BehaviorSubject<any>([]);
    public  productsInCart: Array<any> = [];

      
      addcart(product : any){
          this.cartItemList.push(product);
          console.log(this.cartItemList,"cartitem");
          this.savelist.next(this.cartItemList);
          
          console.log(this.cartItemList);
          
          this.productsInCart=this.cartItemList

        
        
       
      // console.log(this.productsInCart,"productincart");


      //   for (var i=0; i<this.productsInCart.length; i++){
      //     const productExistInCart = this.cartItemList.find(({id}) =>id == this.productsInCart[i].id);
      //     if(productExistInCart){
      //       if (this.productsInCart[i].id == this.cartItemList[i].id) {
      //       this.productsInCart[i].count++
      //       }
      //     }
      //     else if (this.productsInCart[i].id != this.cartItemList[i].id){
      //       this.productsInCart.push(product[i])
      //     }
      //   }

      }
      getProducts(){
        return this.savelist.asObservable();
      }
     
      
      
}

