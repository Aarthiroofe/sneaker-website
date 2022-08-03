import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
// import { Product } from 'src/app/model/product';
// import { MatSnackBar } from '@angular/material/snack-bar';

// import { ProductsService } from '../service/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
 
  products: any;
  notification : any;
  count = 1
  allproducts: any;
  mainproducts:any=[];
  imagedata:any={
    id: "0015",
     productname1: "Jordan",productname2:" Delt 3",
    price: 70000,
    size: "34", Brand: "Jordan",pimage:"./assets/pimg4.png  ",count:1,countingprice:70000,
    description: "Multi-layered, mixed material upper looks both high-tech and handcrafted. Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride."
  };
  senddata: any;
  constructor( private route: ActivatedRoute,private router: Router,private cartService : Product) {
   
    this.allproducts = [
      {
        id: "001",
         productname1: "Jordan",productname2:" Delt 3",
        price: 70000,
        size: "34", Brand: "Jordan",pimage:"./assets/pimg4.png  ",count:1,countingprice:70000,
        description: "Multi-layered, mixed material upper looks both high-tech and handcrafted. Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride.",
        subimage1:"/assets/pimg4.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "002",
         productname1: "Jordan",productname2:" Delt 2",
        price: 72000,
        size: "28", Brand: "Jordan",pimage:"./assets/pimg7.png  ",count:1,countingprice:72000,
        description: "The Jordan Delta is a versatile shoe that's comfortable from the inside out. Mixing high-tech and premium materials, it's plush, lightweight and crafted with an array of details.",
        subimage1:"/assets/pimg7.png  ",subimage2:"/assets/pimg4.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
     
       {
        id: "003",
        productname1: "Nike Air",productname2:"Jordan XT",
        price: 25000,
        size: "32", Brand: "jordan",pimage:"./assets/pimg2.png  ",count:1,countingprice:25000,
        description: "uses pressurised air in a durable, flexible membrane to provide lightweight cushioning.",
        subimage1:"/assets/pimg2.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg4.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "004",
        productname1: "Adidas",productname2:"Wobler ",
        price: 25000,
        size: "34", Brand: "Adidas",pimage:"./assets/pimg3.png  ",count:1,countingprice:25000,
        description: "German manufacturer of athletic shoes and apparel and sporting goods.",
        subimage1:"/assets/pimg3.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg4.png   "
      },
      {
        id: "005",
         productname1: "Suede",productname2:" Classic",
        price: 50000,
        size: "36", Brand: "fila",pimage:"./assets/pimg4.png  ",count:1,countingprice:50000,
        description: "an animal skin made smooth and flexible by removing the hair and then tanning. a fabric made to resemble suede leather.",
        subimage1:"/assets/pimg4.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "006",
         productname1: "Superstar",productname2:"Classic ",
        price: 70000,
        size: "", Brand: "Adidas",pimage:"./assets/pimg5.png  ",count:1,countingprice:70000,
        description: "The distinctive shell toe and smooth cowhide leather upper set Superstar apart from traditional canvas basketball shoes.",
        subimage1:"/assets/pimg5.png   ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "007",
         productname1: "NMD 1",productname2:"Refined ",
        price: 65000,
        size: "38", Brand: "fila",pimage:" ./assets/pimg6.png ",count:1,countingprice:65000,
        description: "It's a plush trainer that cossets your foot with a snug sockliner so that it will feel a part of your foot ",
        subimage1:"/assets/pimg6.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "008",
        productname1: "Nike",productname2:"Zoom ",
        price: 15000,
        size: "30", Brand: "Nike",pimage:"./assets/pimg1.png ",count:1,countingprice:15000,
        description: "The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment.",
        subimage1:"/assets/pimg1.png ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "009",
         productname1: "Nike Air",productname2:" Jordan XT",
        price: 23000,
        size: "30", Brand: "Nike",pimage:"./assets/pimg8.png  ",count:1,countingprice:23000,
        description: "  uses pressurised air in a durable, flexible membrane to provide lightweight cushioning.",
        subimage1:"/assets/pimg8.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "0010",
         productname1: "RX-S-INTL",productname2:"Game ",
        price: 78000,
        size: "32", Brand: "Fils",pimage:" ./assets/pimg9.png ",count:1,countingprice:78000,
        description: "Ankit Export & Import - Offering Red Puma Rxs Shoe at Rs 2999/pair in Siliguri, West Bengal. Read about company",
        subimage1:"/assets/pimg9.png",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "0011",
         productname1: "Adidas",productname2:" Beluga",
        price: 80000,
        size: "34", Brand: "Adidas",pimage:"./assets/pimg3.png  ",count:1,countingprice:80000,
        description: "Steel Grey and Beluga colors are interwoven throughout the Primeknit upper, which for the first time sports a vibrant orange stripe (technically in Solar Red) from heel to toe.",
        subimage1:"/assets/pimg3.png   ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "0012",
         productname1: "Nike Air",productname2:"Jordan XT ",
        price: 66000,
        size: "36", Brand: "Nike",pimage:"./assets/pimg1.png  ",count:1,countingprice:66000,
        description: "uses pressurised air in a durable, flexible membrane to provide lightweight cushioning.",
        subimage1:"/assets/pimg1.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "0013",
         productname1: "Nike ",productname2:"Wobler ",
        price: 70000,
        size: "38", Brand: "",pimage:"./assets/pimg2.png  ",count:1,countingprice:70000,
        description: "one or more translucent pouches of pressurized gas embedded in the midsole and visible from the outside of the shoe",
        subimage1:"/assets/pimg2.png ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      {
        id: "0014",
         productname1: "Nike",productname2:"Zoom ",
        price: 35000,
        size: "28", Brand: "Nike",pimage:" ./assets/pimg3.png ",count:1,countingprice:35000,
        description: " fast-off-the-mark responsiveness and decreased pronation while running, increased ground feel and control to field sports and faster cuts on the basketball court",
        subimage1:"/assets/pimg3.png  ",subimage2:"/assets/pimg7.png  ",subimage3:"/assets/pimg2.png  ",subimage4:"/assets/pimg3.png  "
      },
      
    ]
  }
  ngOnInit(): void {
    this.filter()
  this.senddata = this.imagedata
    
  }
  filter(){
 
  this.mainproducts=this.allproducts.slice(0,4)
  console.log(this.mainproducts); 
  
  }
  addtocart(){
    console.log(this.imagedata);
    this.imagedata.count=this.count
    this.cartService.addcart( this.imagedata)
    // this.openSnackBar("Added your cart")
  }
  alldatas(i:any){
      this.imagedata=i;
      console.log(this.imagedata);
  }

 
  listingpage(){
    this.router.navigate(['/listings'])
  }
  gotodetails(i: any) {
    let navigationExtras: any = {
      queryParams: {
        pageName: 'home',
        id: this.allproducts[i].id
      }
    }
    this.router.navigate(['/details'], navigationExtras);
  }
//   openSnackBar(mes: any) {
//     this.snackBar.open(mes, 'Ok',
//       {
//         duration: 2000
//       });
// }
}