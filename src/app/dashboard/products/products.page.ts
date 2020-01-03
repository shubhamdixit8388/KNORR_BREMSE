import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  companytitle = "assets/company_title2.PNG";
  back = "assets/backarrow.PNG";
  constructor( private route: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.route.navigate(['/dashboard']);
  }
  goto(res: string) {
    if( res === 'allproducts' ) {
      this.route.navigate(['dashboard/products/allproducts']);
    }
    if( res === 'vehiclecompany' ) {
      this.route.navigate(['dashboard/products/vehiclecompany']);
    }
    console.log(res);
  }
}
