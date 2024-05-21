import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username: string = '';
  fullname: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.setForm();
  }

  constructor(private router: Router) {}

  setForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.errorMessage = '';

    if (!this.username || !this.fullname || !this.password || !this.email) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.signupForm.valid) {
      alert('Registered Successfully!');

      this.router.navigate(['']);
    }
  }
}
