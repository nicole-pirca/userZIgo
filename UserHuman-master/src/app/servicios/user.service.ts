import { Injectable } from '@angular/core';
import { User } from '../modelo/user';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  url: string = Global.url;
  constructor(private readonly _httpClient: HttpClient) {}

  get(): Observable<any> {
    return this._httpClient.get(this.url + '/User');
  }
  add(user: User) {
    return this._httpClient.post(this.url + '/User', user);
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/User/' + id);
  }

  update(id: number, user: User) {
    return this._httpClient.put(this.url + '/User/' + id, user);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/User/' + id);
  }
}
