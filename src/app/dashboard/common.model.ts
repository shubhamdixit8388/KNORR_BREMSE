import { Router } from "@angular/router";

class CommonMethods {
    constructor(private route: Router) { }
    goBack(){
        this.route.navigate(['/signup']);
      }
}