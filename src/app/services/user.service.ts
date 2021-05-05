import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiBase = 'https://randomuser.me/api'
  constructor(private http: HttpClient) { }

  getRandomUsers = () => {
    return this.http.get(`${this._apiBase}/?results=50`);
  }

  getUsersByGender = (isFemale: boolean = false) => {
    const gender = isFemale ? 'female' : 'male'
    return this.http.get(`${this._apiBase}/?results=50&gender=${gender}`);
  }

  getSeededUserSet = () => {
    return this.http.get(`${this._apiBase}/?results=50&seed=main`);
  }

}
