import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from '@angular/router';
import { User } from '../users.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string;
  email: string;
  type: string;
  phone: number;
  dataFromService: any;
  usr: User;
  constructor(private dbservice: DbService,
              private route: Router) { }

  ngOnInit() {
  }
  signup()
  {
    // this.usr.name = this.name;
    // this.usr.phone = this.phone;
    // this.usr.email = this.email;
    // this.usr.type = this.type;
    // console.log(this.usr);
    this.dbservice.username = this.name;
    var dataToSend = {name: this.name, phone: this.phone, email: this.email, type: this.type};
    this.dbservice.signup(dataToSend).subscribe((dataReturnFromService) => {
      this.dataFromService = this.dataFromService;
    });
    this.name = undefined;
    this.email = undefined;
    this.type = undefined;
    this.phone = undefined;
    this.route.navigate(['/dashboard']);
  }
  dashboard() {
    this.route.navigate(['/dashboard']);
  }

}
