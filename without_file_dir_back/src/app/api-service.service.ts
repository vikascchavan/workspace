import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public url = '/api/webapi/v1/user';

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    return this.http.post('this.url',data);
  }
}
