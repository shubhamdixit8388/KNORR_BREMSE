import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
  companytitle = "assets/company_title2.PNG";
  back = "assets/backarrow.PNG";
  pdimg = "assets/p1.jpg";
  products: any; 
  constructor(public dbservice: DbService,
              public router: ActivatedRoute,
              private route:Router) {

   }
   ngOnInit() {
     console.log('eeeee = ', this.dbservice.myId1);
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){
        return; 
      }
      const productId = paramMap.get('productId');
      console.log(productId);
      this.dbservice. getProduct(productId)
      .then(data=>{
        this.products=data;
        console.log("dfsdf: "+this.products);
      });
    });
  }
  goBack(){ 
    console.log(this.dbservice.myId1, this.dbservice.myId2);
    const lnk = 'dashboard/products/vehiclecompany/vehiclemodel/'+JSON.parse(localStorage.getItem('myId1'))+'/msproducts/' + JSON.parse(localStorage.getItem('myId2'));
    this.route.navigate([lnk]);
  }
  breakfeature(){
    console.log("Hello shubham dixit");
  }
} 
