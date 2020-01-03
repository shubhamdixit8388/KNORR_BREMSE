import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.page.html',
  styleUrls: ['./pricelist.page.scss'],
})
export class PricelistPage implements OnInit {

  companytitle = 'assets/company_title2.PNG';
  back = 'assets/backarrow.PNG';
  
  constructor(private route: Router,
              private dbservice: DbService) { }

  ngOnInit() {
  }
  goBack() {
    localStorage.setItem('change1', JSON.stringify('not_changed'));
    this.route.navigate(['/dashboard']);
  }
  gotoproducts(val: string){
    localStorage.setItem('change1', JSON.stringify('changed'));
    // console.log('Shubham: ', JSON.parse(localStorage.getItem('change1')));
    const lnk = '/dashboard/products/' + val;
    this.route.navigateByUrl(lnk);
  }
  gotocwproducts(val: string){
    localStorage.setItem('change1', JSON.stringify('changed'));
    // console.log('Shubham: ', JSON.parse(localStorage.getItem('change1')));
    this.route.navigateByUrl('/dashboard/pricelist/cwproducts');
  }
}
