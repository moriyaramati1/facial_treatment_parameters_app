import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { PostInformationBody } from 'src/app/models/postRequestData';
import {SERVER_URL} from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class PostInformationService {
  private Url = SERVER_URL;

  constructor(private http: HttpClient) { }

  public sendData(data: PostInformationBody): Observable<any>  {
    return this.http.post<PostInformationBody>(this.Url, data,{
      headers: {
        "Content-Type": "text/plain",
      }
    }).pipe(
      catchError(error => {
        alert("השליחה נכשלה - נא להודיע למזכירה");
        return of(null);
      })
    )
  }
}
