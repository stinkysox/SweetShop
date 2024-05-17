import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  loginForm!:FormGroup;

  ngOnInit(): void{
    this.setForm();
  }

  setForm(){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    if(this.loginForm.valid){
      alert("Login Successfull!")

      this.router.navigate(['']);
    }
  }

navigateToSignup() {
  this.router.navigate(['/signup']);
}
}
