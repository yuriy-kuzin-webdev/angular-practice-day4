import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable, delay, catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(delay(200), catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message);
    return throwError(() => err.message);
  }

  create(product:IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
  }
}
