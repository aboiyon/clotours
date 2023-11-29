import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = new Map<number, { item: any; quantity: number }>(); // use a Map object to store the items in the cart
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    shipping: '',
  });

  shippingOptions!: { type: string; price: number }[];
  shippingCost = 0; // variable to store the shipping cost
  totalCost = 0; // variable to store the total cost

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cartService.getShippingPrices().subscribe((options) => {
      this.shippingOptions = options;
      this.checkoutForm.get('shipping')?.setValue(this.shippingOptions[-1].type);
    });
    this.cartService.getItems().forEach((item) => {
      // iterate over the items from the cart service
      if (this.items.has(item.id)) {
        // check if the item already exists in the cart
        let value = this.items.get(item.id); // get the value object of the item
        if (value) {
          value.quantity++; // increment the quantity of the item
          this.items.set(item.id, value); // update the value object in the cart
        }
      } else {
        this.items.set(item.id, { item: item, quantity: 1 }); // add the item to the cart with quantity 1
      }
    });
    this.shippingCost = this.calculateShippingCost();
    this.totalCost = this.calculateTotalCost();
  }

  onSubmit(): void {
    this.items.clear(); // clear the items from the cart
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    this.items.forEach((value) => {
      // iterate over the values of the cart
      subtotal += value.item.price * value.quantity; // multiply the item price by the quantity and add to the subtotal
    });
    return subtotal;
  }

  calculateShippingCost(): number {
    let option = this.shippingOptions.find(
      (o) => o.type === this.checkoutForm.get('shipping')?.value
    );
    return option ? option.price : 0;
  }

  calculateTotalCost(): number {
    return this.calculateSubtotal() + this.shippingCost;
  }

  onShippingChange(): void {
    this.shippingCost = this.calculateShippingCost();
    this.totalCost = this.calculateTotalCost();
  }

  onAdd(item: any): void {
    // function to add one more item to the cart
    let value = this.items.get(item.id); // get the value object of the item
    if (value) {
      value.quantity++; // increment the quantity of the item
      this.items.set(item.id, value); // update the value object in the cart
      this.totalCost = this.calculateTotalCost(); // recalculate the total cost
    }
  }

  onRemove(item: any): void {
    // function to remove one item from the cart
    let value = this.items.get(item.id); // get the value object of the item
    if (value) {
      value.quantity--; // decrement the quantity of the item
      if (value.quantity === 0) {
        // check if the quantity is zero
        this.items.delete(item.id); // delete the item from the cart
      } else {
        this.items.set(item.id, value); // update the value object in the cart
      }
      this.totalCost = this.calculateTotalCost(); // recalculate the total cost
    }
  }
}
