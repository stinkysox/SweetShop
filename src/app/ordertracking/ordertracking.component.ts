import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-ordertracking',
  templateUrl: './ordertracking.component.html',
  styleUrl: './ordertracking.component.css'
})
export class OrdertrackingComponent implements OnInit {

  m_map: any;
  directionsService: any;
  directionsDisplay: any;


  distance: string | undefined;
  duration: string | undefined;
  error: string | undefined;
  deliveryTime: Date | undefined;

  isPopupVisible: boolean = false;


  constructor( private router: Router) { }

  ngOnInit() {
    // console.log("showPopup value :", localStorage.getItem('showPopup'));
    // if (localStorage.getItem('showPopup') === 'true') {
    //   this.showDeliveryPopup();
    // }

    
    this.initMap();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.m_map);
    // this.closePopup();
  }


  
  initMap() {
    this.m_map = new google.maps.Map(document.getElementById('m_map') as HTMLElement, {
      center: { lat: 40.7128, lng: -74.0060 },
      zoom: 12
    });
  }

  calculateAndDisplayRoute() {
    const startInput = document.getElementById('start') as HTMLInputElement;
    const endInput = document.getElementById('end') as HTMLInputElement;

    if (!startInput || !endInput) {
      console.error('Start or end input element not found');
      return;
    }

    const start = startInput.value.trim();
    const end = endInput.value.trim();

    if (!start || !end) {
      this.error = 'Please enter both start and end locations.';
      return;
    }

    this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, (response: any, status: any) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        const route = response.routes[0];
        const leg = route.legs[0];
        this.distance = leg.distance.text;
        this.duration = leg.duration.text;
        this.error = undefined;

        // Calculate delivery time
        const now = new Date();
        const deliveryTime = new Date(now.getTime() + leg.duration.value * 1000); // Duration in milliseconds

        // Check if delivery time is less than 5 minutes from now
        const alertTime = new Date(now.getTime() + 5 * 60000); // 5 minutes in milliseconds
        if (deliveryTime < alertTime) {
          alert('Your order will be delivered soon!');
        }

        // Set up timer for delivery
        // setTimeout(() => {
        //   const currentTime = new Date();
        //   if (currentTime >= deliveryTime) {
        //     this.showDeliveryPopup();
        //   }
        // }, leg.duration.value * 1000);


        setTimeout(() => {
          const currentTime = new Date();
          if (currentTime >= deliveryTime) {
           // this.showDeliveryPopup();
            setTimeout(() => {
              this.router.navigate(['/products']); // Redirect to next page after timer completes
            }, 5000); // Redirect after 5 seconds (adjust as needed)
          }
        }, leg.duration.value * 1000);


        // Set up timer for delivery alert 5 minutes before
        setTimeout(() => {
          alert('Your order will be delivered in less than 5 minutes!');
        }, leg.duration.value * 1000 - 5 * 60000); // 5 minutes before delivery in milliseconds
      } else {
        this.error = 'Directions request failed due to ' + status;
        this.distance = undefined;
        this.duration = undefined;
      }
    });
  }


  // showDeliveryPopup() {
  //   // Display your delivery popup here, for example:
  //  // alert('Your order has been delivered!');
  //  this.isPopupVisible = true;
  // }
  // showDeliveryPopup() {
  //   // Display delivery popup
    
  //   const popup = document.createElement('app-delivery-popup');
  //   document.body.appendChild(popup);
  //   // this.isPopupVisible = true;
  // }

  closePopup() {
    // Remove the popup element from the DOM
    // this.isPopupVisible = false;
    const popupElement = document.querySelector('.popup');
    if (popupElement) {
      popupElement.remove();
    }
  }
}