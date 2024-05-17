
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoUrl = './assets/ss.png'; 
  description = 'Sweetspot';
  links = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/signup' },
    { label: 'OrderTracking', path: '/ordertracking' },
    { label: 'StoreManagement', path: '/store' }
    
  ];
  legal = '© 2024 Sweetspot. All Rights Reserved.'; 
}
