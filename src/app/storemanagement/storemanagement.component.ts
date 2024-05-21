import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-storemanagement',
  templateUrl: './storemanagement.component.html',
  styleUrl: './storemanagement.component.css',
})
export class StoremanagementComponent implements OnInit {
  @ViewChild('myModal') model: ElementRef | undefined;
  storeObj: Store = new Store();
  storeList: Store[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem('angular17crud');
    if (localData != null) {
      this.storeList = JSON.parse(localData);
    }
  }

  openModel() {
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  closeModel() {
    this.storeObj = new Store();
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  onDelete(item: Store) {
    const isDelet = confirm('Are you sure want to Delete');
    if (isDelet) {
      const currentRecord = this.storeList.findIndex(
        (m) => m.id === this.storeObj.id
      );
      this.storeList.splice(currentRecord, 1);
      localStorage.setItem('angular17crud', JSON.stringify(this.storeList));
    }
  }
  onEdit(item: Store) {
    this.storeObj = item;
    this.openModel();
  }

  updateStud() {
    const currentRecord = this.storeList.find((m) => m.id === this.storeObj.id);
    if (currentRecord != undefined) {
      currentRecord.city = this.storeObj.city;
      currentRecord.address = this.storeObj.address;
    }
    localStorage.setItem('angular17crud', JSON.stringify(this.storeList));
    this.closeModel();
  }
  saveStudent() {
    debugger;
    const isLocalPresent = localStorage.getItem('angular17crud');
    if (isLocalPresent != null) {
      const oldArray = JSON.parse(isLocalPresent);
      this.storeObj.id = oldArray.length + 1;
      oldArray.push(this.storeObj);
      this.storeList = oldArray;
      localStorage.setItem('angular17crud', JSON.stringify(oldArray));
    } else {
      const newArr = [];
      newArr.push(this.storeObj);
      this.storeObj.id = 1;
      this.storeList = newArr;
      localStorage.setItem('angular17crud', JSON.stringify(newArr));
    }
    this.closeModel();
  }
}

export class Store {
  id: number;
  city: string;
  address: string;

  constructor() {
    this.id = 0;
    this.address = '';
    this.city = '';
  }
}
