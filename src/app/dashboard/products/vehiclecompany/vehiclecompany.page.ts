import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';
import { stringify } from 'querystring';
import { AngularDelegate } from '@ionic/angular';
import { AngularFrameworkDelegate } from '@ionic/angular/dist/providers/angular-delegate';
@Component({
  selector: 'app-vehiclecompany',
  templateUrl: './vehiclecompany.page.html',
  styleUrls: ['./vehiclecompany.page.scss'],
})
export class VehiclecompanyPage implements OnInit { 

  companytitle = "assets/company_title2.PNG";
  back = "assets/backarrow.PNG";
  companies: any;
  constructor( private route: Router,
               private dbservice: DbService) { }

  ngOnInit() {
    this.dbservice.getAllCompanies().then(data => {
      this.companies = data;
      console.log(this.companies);
    });
    const temp = JSON.parse(localStorage.getItem('change1'));
    console.log("Dixit: ", temp);
    // console.log("Checking: ",this.val.changeRoute);
  }
  // goto(id: string){
  //   this.dbservice.myId1 = id;
  //   this.route.navigate(['dashboard/products/vehiclecompany/vehiclemodel']);
  // }
  goBack() {
    console.log('assssssssssssssssssssssssssssss');
    if ( 'changed' === JSON.parse(localStorage.getItem('change1')) ) {
      // console.log('new:   ', JSON.parse(localStorage.getItem('change1')) );
      this.route.navigate(['/dashboard/pricelist']);
    } else {
      this.route.navigate(['dashboard/products']);
    }
  }
}
