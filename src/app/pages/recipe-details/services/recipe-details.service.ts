import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeDetailsService {
  private apiUrl = environment.apiUrl.baseUrl;

  constructor(private http: HttpClient) {}

  getRecipeDetails(name: string): Observable<any> {
    const url =
      `${this.apiUrl}` +
      environment.apiUrl.menuItems.portal.recipeDetails +
      `/${name}`;
    return this.http.get<any>(url);
  }
}
