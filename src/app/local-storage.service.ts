import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Function to get data from local storage by key
  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return null;
  }

  // Function to set data in local storage with key and value
  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

}
