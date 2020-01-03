import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.page.html',
  styleUrls: ['./allproducts.page.scss'],
})
export class AllproductsPage implements OnInit {
  products: any;
  companytitle = "assets/company_title2.PNG";
  back = "assets/backarrow.PNG";
  constructor( private dbservice: DbService,
               private route: Router ) { }

  ngOnInit() {
    this.dbservice.getAllProducts().then(data => {
      this.products = data;
      console.log(this.products);
    });
  }
  goBack(){ 
    this.route.navigate(['/dashboard/products']);
  }
}
