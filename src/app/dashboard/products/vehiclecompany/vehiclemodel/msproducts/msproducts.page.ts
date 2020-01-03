import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-msproducts',
  templateUrl: './msproducts.page.html',
  styleUrls: ['./msproducts.page.scss'],
})
export class MsproductsPage implements OnInit {
  companytitle = "assets/company_title2.PNG";
  back = "assets/backarrow.PNG";
  products: any;
  private model_name: string;
  private check: string;
  private check2: string;
  constructor( public dbservice: DbService,
               public router: ActivatedRoute,
               private route: Router) { }
  ngOnInit() {
    console.log("shubham dixit: ", JSON.parse(localStorage.getItem('change1')))
    if(JSON.parse(localStorage.getItem('change1')) === 'not_changed') {
      this.check2 = 'changed';
    }
    else{
      this.check = "changed";
    }
    
    this.router.paramMap.subscribe(paramMap => {
      if ( !paramMap.has('msproductName')) {
      return;
      }
      this.model_name = paramMap.get('msproductName');
      this.dbservice.myId2 = this.model_name;
      localStorage.setItem('myId2', JSON.stringify(this.model_name));
      this.dbservice.getMSProducts(this.model_name)
      .then(data => {
        this.products = data;
      });
    });
  }
  goBack() {
    const lnk = 'dashboard/products/vehiclecompany/vehiclemodel/' + JSON.parse(localStorage.getItem('myId1'));
    this.route.navigate([lnk]);
  }
  // gotodeatils(id: string){
  //   const lnk = 'dashboard/products/allproducts/' + id;
  //   this.route.navigate([lnk]);
  // }
}
