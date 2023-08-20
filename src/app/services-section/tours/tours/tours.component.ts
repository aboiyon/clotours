import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {

  tours = [
    {
      name: 'City Tour',
      description: 'Explore the city\'s landmarks',
      imageUrl: 'city-tour.jpg',
      price: 70.00
    },
    {
      name: 'Spice Tour',
      description: 'Discover local spices and flavors',
      imageUrl: 'spice-tour.jpg',
      price: 70.00
    },
    {
      name: 'Island Tour',
      description: 'Discover local spices and flavors',
      imageUrl: 'spice-tour.jpg',
      price: 70.00
    },
    {
      name: 'Safari Blue',
      description: 'Discover local spices and flavors',
      imageUrl: 'spice-tour.jpg',
      price: 70.00
    },
    {
      name: 'Mountains',
      description: 'Discover local spices and flavors',
      imageUrl: 'spice-tour.jpg',
      price: 70.00
    },
    {
      name: 'Game Parks',
      description: 'Discover local spices and flavors',
      imageUrl: 'spice-tour.jpg',
      price: 70.00
    },
  ];

}
