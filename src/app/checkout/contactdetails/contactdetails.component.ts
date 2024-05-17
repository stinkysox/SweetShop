import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrl: './contactdetails.component.css'
})
export class ContactdetailsComponent implements OnInit {
  paymentForm!: FormGroup;
  contact: { name: string, address: string, phone: string, postcode: string, town: string, note: string } = { name: '', address: '', phone: '', postcode:'',town:'',note:'' };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvc: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.paymentForm.valid){
    const cardDetails = this.paymentForm.value;
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulate random success/failure
      if (success) {
        alert('Payment successful!');
      } else {
        alert('Payment failed!');
      }
    }, 1000);} 
    else {
      alert('Please fill in all required fields!');
    }
  }

}
