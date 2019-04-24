import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';


@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {

  constructor(private srvis :GetDataService) {      //here we are creating the object of GetDataService service
  }
  products;
  ngOnInit() {
      this.srvis.getProducts().subscribe(res=>{       //here we getting observable and we are subscribing it for usage
          this.products=res;
      })
 }
}
