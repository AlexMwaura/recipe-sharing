import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface MenuItem {
  name: string;
  category: string;
  price: number;
  imagePath: string;
}
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = environment.apiUrl.baseUrl;

  constructor(private http: HttpClient) {}
  getAllMenuItems(): Observable<MenuItem[]> {
    const url = `${this.apiUrl}` + environment.apiUrl.menuItems.portal.items;

    return this.http.post<MenuItem[]>(url, {});
  }
  getMenuItemsByCategory(category: string): Observable<MenuItem[]> {
    const url = `${this.apiUrl}${environment.apiUrl.menuItems.portal.itemsCategory}`;
    return this.http.post<MenuItem[]>(url, { category });
  }

  addMenuItem(menuItem: MenuItem): Observable<MenuItem> {
    const url = `${this.apiUrl}${environment.apiUrl.menuItems.portal.addItems}`;
    return this.http.post<MenuItem>(url, menuItem);
  }

  // Method to convert file to base64
  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
