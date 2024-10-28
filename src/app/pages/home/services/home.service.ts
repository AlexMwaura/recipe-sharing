import { Injectable } from '@angular/core';
export interface MenuItem {
  name: string;
  category: string;
  price: number;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
}
