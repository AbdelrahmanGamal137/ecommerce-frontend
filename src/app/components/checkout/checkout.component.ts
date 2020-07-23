import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { CartStatusComponent } from '../cart-status/cart-status.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      address: this.formBuilder.group({
        city: [''],
        street: ['']
      })
    });

    // this.totalPrice = this.cartStatus.totalPrice;
    // this.totalQuantity = this.cartStatus.totalQuatity

    // this.cartService.totalQuantity.subscribe(
    //   data => {
    //     this.totalQuantity = data;
    //     console.log(this.totalQuantity);
    //   }
    // );

  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get('customer').value);
  }

}
