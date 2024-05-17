import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderDetails: any;
  checkoutForm!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.orderDetails = params;
    });

    this.checkoutForm = this.fb.group({
      shippingAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      cardNumber: [''],
      cardExpiry: [''],
      cardCvv: [''],
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const paymentDetails = {
        shippingAddress: this.checkoutForm.value.shippingAddress,
        phoneNumber: this.checkoutForm.value.phoneNumber,
        paymentMethod: this.checkoutForm.value.paymentMethod,
        cardNumber: this.checkoutForm.value.cardNumber,
        cardExpiry: this.checkoutForm.value.cardExpiry,
        cardCvv: this.checkoutForm.value.cardCvv,
      };

      // Simulate payment processing (e.g., call payment gateway API)
      console.log('Payment details:', paymentDetails);

      // Complete the order
      console.log('Order completed!');
    }
  }
}
