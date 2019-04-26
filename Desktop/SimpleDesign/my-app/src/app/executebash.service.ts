import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecutebashService {

  constructor(private httpClient: HttpClient) { }

  l_url =  "http://localhost:3000";
  execute(user) {
    return this.httpClient.post<any>(this.l_url, user)
      .pipe(
        map((res: any) => this.response(res)),
        catchError(this.errorHandler)
      )
  }
  response(res) {
    if (res.status === (200)) {
      return res;
    }
    else {
      throw new Error(res.message);
    }
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
