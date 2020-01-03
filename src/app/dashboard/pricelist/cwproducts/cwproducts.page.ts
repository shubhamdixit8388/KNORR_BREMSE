import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';


@Component({
  selector: 'app-cwproducts',
  templateUrl: './cwproducts.page.html',
  styleUrls: ['./cwproducts.page.scss'],
})
export class CwproductsPage implements OnInit {
  blow: boolean = false;
  products: any;
  constructor(private route: Router,
              private dbservice: DbService) { }

  ngOnInit() {
    this.dbservice.getCategorize()
      .then(data => {
        this.products = data;
      });
      //console.log("hey bro: ", this.products);
  }
  goBack() {
    this.route.navigate(['/dashboard/pricelist']);
  }
  gotoexpand(){
    if(this.blow === false){
      this.blow = true;
    } else{
      this.blow = false;
    }
  }
}
