import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothingComponent } from 'src/app/services-section/clothing/clothing/clothing.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(public router: Router, public activateRoute: ActivatedRoute) {}

  ngOnInit(){}

  onToursClick() {
    this.router.navigate(['tours']);
  }

  onClothingClick() {
    this.router.navigate(['clothing']);
  }

  onBeveragesClick() {
    this.router.navigate(['beverages']);
  }

}
