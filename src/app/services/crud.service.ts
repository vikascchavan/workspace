import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class CrudService {
  index;
  public url = environment.endpoint + '/webapi/v1/user';
  public url1 = environment.endpoint + '/webapi/v1/group';
  public url2 = environment.endpoint + '/webapi/v1/usergroup';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private http: HttpClient) { }

  loginUser(body) {
    return this.http.post('/webapi/v1/isvaliduser', body);
  }
  createGroup(body) {
    return this.http.post('/webapi/v1/group', body);
  }
  removeGroup(body) {
    console.log("body", body);
    return this.http.delete('/webapi/v1/group' + '/' + body);
  }
  removeUserFromGroup(body) {
    console.log('body for user', body);
    return this.http.delete(this.url2 + '/' + body.u_id + '/' + body.g_id);
  }
  userAddInGroup(body) {
    return this.http.post('/webapi/v1/usergroup', body);
  }

  getAllUserInGroup(gid) {
    return this.http.get(this.url2 + "/" + gid);
  }
  getAllGroups(): Observable<any> {
    return this.http.get(this.url1);
  }

  getUser(id): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.url);

  }

  updateUser(user) {
    user.contact_number = user.contact_number.toString();
    return this.http.put('/webapi/v1/user/' + user.id, user);
  }
  createUser(body) {
    body.contact_number = body.contact_number.toString();
    return this.http.post('/webapi/v1/user', body);
  }
  deleteUser(id) {
    return this.http.delete(this.url + "/" + id)
  }
}