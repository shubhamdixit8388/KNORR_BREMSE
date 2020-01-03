import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  companytitle = 'assets/company_title2.PNG';
  back = 'assets/backarrow.PNG';
  myId1: string;
  myId2: string;
  username: string;
  search: string;
  newData: any;
  prevURl: string;
  //private changeRoute: string;

  apiUrl = 'http://localhost:53575/api/';
  constructor(public http: HttpClient) {
    console.log('Hello Service');
  }
  getAllProducts() {
    return new Promise ( resolve1 => {
      this.http.get(this.apiUrl + 'products').subscribe(data => {
        this.newData =data;
        resolve1(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProduct(productId: string) {
    console.log('Hello Service 3');

    return new Promise(resolve1 => {
      this.http.get(this.apiUrl + 'products?id=' + productId + '').subscribe(data=>{
        resolve1(data);
      }, err => {
        console.log(err);

      });
     });
   }

   getAllCompanies(){
    return new Promise ( resolve1 => {
      this.http.get(this.apiUrl + 'companies').subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);
      });
    });
   }
   getModels(companyName: string){
     console.log("Console value:",companyName);
    return new Promise(resolve1 => {
      this.http.get(this.apiUrl + 'models?id=' + companyName + '').subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);

      });
     });
   }
   getModelsandcompany(companyId: string) {
    return new Promise(resolve1 => {
      this.http.get(this.apiUrl + 'companies?id=' + companyId).subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);

      });
     });
   }

   getMSProducts(msproducts: string) { 
    return new Promise(resolve1 => {
      this.http.get(this.apiUrl + 'msproducts?id=' + msproducts + '').subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);
      });
     });
   }
   signup(dataToSend: User) {
     console.log(dataToSend);
     return this.http.post(this.apiUrl + 'users', dataToSend, { headers: new HttpHeaders({ "Content-Type" : "application/json" })});
   }
   getSearch() {
    return new Promise ( resolve1 => {
      this.http.get(this.apiUrl + 'search').subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getFilter(name: string, type: string){
    return new Promise(resolve1 => {
      this.http.get(this.apiUrl + 'filter?com_name=' + name + '&type='+type).subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);
      });
     });
  }
  getCategorize(){
    return new Promise(resolve1 => {
      this.http.get(this.apiUrl + 'cwproducts').subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);
      });
     });
  }
  getCWProducts(category: string){
    console.log("Hey babe: ", category);
    return new Promise(resolve1 => {
      this.http.get(this.apiUrl + 'cwproducts/' + category).subscribe(data => {
        resolve1(data);
      }, err => {
        console.log(err);
      });
     });
  }
}
