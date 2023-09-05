import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, tap } from 'rxjs';
import { HeaderService } from 'src/app/core/services/header.service';
import { Order } from 'src/app/data/models/order';
import { Sku } from 'src/app/data/models/sku';
import { CartService } from 'src/app/data/services/cart.service';
import { LineItemService } from 'src/app/data/services/line-item.service';
import { OrderService } from 'src/app/data/services/order.service';
import { SkuService } from 'src/app/data/services/sku.service';

@Component({
  selector: 'app-services',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // constructor(public router: Router, public activateRoute: ActivatedRoute) {}
  id: string = '';
  product!: Sku;
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private skus: SkuService,
    private location: Location,
    private router: Router,
    private header: HeaderService,
    private orders: OrderService,
    private lineItems: LineItemService,
    private cart: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        mergeMap(params => {
          const id = params.get('id')
          this.id = id ? id : '';

          return this.skus.getSku(this.id);
        }),
        tap((sku) => {
          this.product = sku;
        })
      ).subscribe({
        error: (err) => this.router.navigateByUrl('/error')
      });

    this.header.setHeaderButtonsVisibility(true);
  }

  addItemToCart() {
    if (this.quantity > 0) {
      if (this.cart.orderId == '') {
        this.orders.createOrder()
          .pipe(
            mergeMap((order: Order) => {
              this.cart.orderId = order.id || '';

              return this.lineItems.createLineItem({
                orderId: order.id,
                name: this.product.name,
                imageUrl: this.product.imageUrl,
                quantity: this.quantity,
                skuCode: this.product.code
              });
            })
          )
          .subscribe(
            () => {
              this.cart.incrementItemCount(this.quantity);
              this.showSuccessSnackBar();
            },
            err => this.showErrorSnackBar()
          );
      } else {
        this.lineItems.createLineItem({
          orderId: this.cart.orderId,
          name: this.product.name,
          imageUrl: this.product.imageUrl,
          quantity: this.quantity,
          skuCode: this.product.code
        }).subscribe(
          () => {
            this.cart.incrementItemCount(this.quantity);
            this.showSuccessSnackBar();
          },
          err => this.showErrorSnackBar()
        );
      }
    } else {
      this.snackBar.open('Select a quantity greater than 0.', 'Close', { duration: 8000 });
    }
  }

  setQuantity(no: number) {
    this.quantity = no;
  }

  goBack() {
    this.location.back();
  }

  private showSuccessSnackBar() {
    this.snackBar.open('Item successfully added to cart.', 'Close', { duration: 8000 });
  }

  private showErrorSnackBar() {
    this.snackBar.open('Failed to add your item to the cart.', 'Close', { duration: 8000 });
  }

}
