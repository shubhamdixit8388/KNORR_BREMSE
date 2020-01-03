import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../db.service';
import { Product } from './search.model';
import { Knorr } from './myarray.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  url1 = 'assets/products_icon.svg';
  url2 = "assets/price_list_icon.svg";
  url3 = "assets/distributors_icon.svg"
  homeimgurl = "assets/dashboard_img.jpg"; 
  company_title = "assets/company_title.PNG";
  items;
  searchitems: any;
  searchproduct: [];
  searchmodel: [];
  searchcompany: [];
  myarr: Array<string> = [];
  com: Array<string> = [];
  mod: Array<string> = [];
  
  // data: {
  //   id: number,
  //   name: string
  // }
  constructor( private router: Router,
               private dbservice: DbService) {
                //this.initializeItems();
               }

  ngOnInit() {
    this.dbservice.getSearch().then(data => {
      this.searchitems = data;
      console.log("In fetch: ",this.searchitems);
      localStorage.setItem('change1', JSON.stringify('not_changed'));
    });
    // this.searchproduct = this.searchitems;
     // console.log("SearchProduct22: " , this.searchproduct);
  }
  initializeItems() {
    
    this.searchproduct = [];
    this.searchmodel = [];
    this.searchcompany = [];
    
  }
  getItems(ev) {
    var val = ev.target.value;


    for (let prop in this.searchitems) {
      console.log("sadasda",prop,this.searchitems[prop].com_name[0].com_name[0].name);
      console.log("sadasda",this.searchitems[prop].model_name[0].name);
      this.mod.push(this.searchitems[prop].model_name[0].name);
      this.com.push(this.searchitems[prop].com_name[0].com_name[0].name);
    }
    //console.log("New Ayyar: ",this.mod);
    this.mod = [...new Set(this.mod)];
    console.log(this.com)
    this.com = [...new Set(this.com)];
    console.log("New Ayyar: ", this.mod, this.com);

    if (val && val.trim() != '') {
      this.dbservice.search = val;
      console.log('Search Item: ' + this.dbservice.search);
      console.log('Search Array: ', this.searchproduct);
      this.searchproduct = this.searchitems.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      this.mod = this.mod.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      this.com = this.com.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      console.log("svdixit New Ayyar: ",this.mod, this.com);
      this.myarr = [];
      console.log("Tell me:",this.searchcompany);
      //console.log("Search Product: ",this.searchproduct);
      
      
    }
    else{
      this.clear();
    }
  }
  getFocus(){
    console.log("Hello, You get FOCUS");
    
  }
  clear(){
    console.log("Clear called");
    this.dbservice.search = undefined;
    this.initializeItems();
  }
  gotoproducts(){
    this.router.navigate(['dashboard/products']);
  }
  gotopricelist(){
    this.router.navigate(['dashboard/pricelist']);
  }
  gotoproduct(company_name: string){
    var lnk = 'dashboard/products/allproducts/' + company_name;
    this.router.navigate([lnk]);
  }
  gotomodel(model_name: string){
    var lnk = 'dashboard/products/vehiclecompany/vehiclemodel/'+this.com[0]+'/msproducts/' + model_name;
    this.router.navigate([lnk]);
  }
  gotocompany(id: string){
    var lnk = 'dashboard/products/vehiclecompany/vehiclemodel/' + id;
    this.router.navigate([lnk]);
  }
}
