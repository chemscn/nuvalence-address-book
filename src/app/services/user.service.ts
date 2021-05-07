import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUsers, User } from '../models';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiBase = 'https://randomuser.me/api'
  constructor(private http: HttpClient) { }

  getRandomUsers = (): Observable<User[]> => {
    return this.http.get<RandomUsers>(`${this._apiBase}/?results=66`)
      .pipe(
        map((response) => response.results as User[])
      );
  }

  getUsersByGender = (isFemale: boolean = false): Observable<User[]> => {
    const gender = isFemale ? 'female' : 'male'
    return this.http.get<RandomUsers>(`${this._apiBase}/?results=66&gender=${gender}`)
      .pipe(
        map((response) => response.results as User[])
      );
  }

  getSeededUserSet = (): Observable<User[]> => {
    return this.http.get<RandomUsers>(`${this._apiBase}/?results=66&seed=main`)
      .pipe(
        map((response => response.results as User[]))
      );
  }

}
