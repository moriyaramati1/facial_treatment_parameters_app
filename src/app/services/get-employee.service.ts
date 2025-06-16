import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { SERVER_URL } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {
  private Url = SERVER_URL;

  constructor(private http: HttpClient) { }
  public fetchEmployees(): Observable<any> {
    return this.http.get<any[]>(this.Url).pipe(
      catchError(error => {
        alert("טעינת מטפלות נכשלה- אנא פני למזכירה")
        return of([]);
      })
    )
  }
}
