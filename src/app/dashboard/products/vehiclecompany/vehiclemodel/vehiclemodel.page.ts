import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-vehiclemodel',
  templateUrl: './vehiclemodel.page.html',
  styleUrls: ['./vehiclemodel.page.scss'],
})
export class VehiclemodelPage implements OnInit {
  
  companytitle = "assets/company_title2.PNG";
  back = "assets/backarrow.PNG";
  models: any;
  company: string;
  private duty: string;
  private vehicleName: string;
  constructor(public dbservice: DbService,
              public router: ActivatedRoute,
              private route: Router) {
                this.duty = "light";
                console.log("Duty : ", this.duty);
  }
  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if (!paramMap.has('vehicleName')) {
        return;
      }
      this.vehicleName = paramMap.get('vehicleName');
      this.dbservice.myId1 = this.vehicleName;
      localStorage.setItem('myId1', JSON.stringify(this.vehicleName));
      this.company = this.vehicleName;
      console.log("Vehicle Name: ",this.vehicleName);
      });
      this.gotoFilter(this.duty);
      //this.dbservice.prevURl = this.route.url;
    // this.sub();
  }

    // sub(){
    //   this.dbservice.test.subscribe(()=>{
    //     console.log('ssss');
    //     this.add();
        
    //   });
    // }

  // goModel( modelid: string){
  //   console.log("vgsfdgv:    "+modelid);
  //   this.route.navigate(['dashboard/products/vehiclecompany/vehiclemodel/msproducts/'+model_id+'']);
  // }
  goBack() {
    this.route.navigate(['dashboard/products/vehiclecompany']);
  }
  gotoFilter(type: string){
    console.log("Check: ",type, this.vehicleName);
    this.dbservice.getFilter(this.vehicleName, type).then(data => {
      this.models = data;
    });
  }
}
