import { Component, OnInit, ViewChild, Renderer, Input } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  accordionExapanded = true;
  @ViewChild('cc', {static: true}) cardContent: any;
  @Input('title') title: string;
  products: any;

  // icon: string = "arrow-forward";

  constructor(public renderer: Renderer,
              private dbservice: DbService) {
    
  }

  ngOnInit() {
    console.log("Plz yaar: ", this.cardContent.el);
    this.renderer.setElementStyle(this.cardContent.el, "webkitTransition", "max-height 500ms, padding 500ms");
    //console.log("hello shubhamjiii",this.title);
    this.dbservice.getCWProducts(this.title)
      .then(data => {
        this.products = data;
        console.log("Heyyyyy: ", this.products);
      });
      
  }

  toggleAccordion() {
     if (this.accordionExapanded === true) {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "fit-content");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "13px 16px");
      this.accordionExapanded = false;
     } else {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
      this.accordionExapanded = true;

     }

     
    // this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}
