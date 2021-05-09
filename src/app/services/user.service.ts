import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUsers, User } from '../models';
import { finalize, map, switchMap, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiBase = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  queryUsers = (pageNumber: number): Observable<User[]> => {
    const query = `?page=${pageNumber}&results=33&seed=main`
    return this.http.get<RandomUsers>(`${this._apiBase}/${query}`)
      .pipe(
        map((response) => response.results as User[])
      );
  }

  getUsersByGender = (isFemale: boolean = false): Observable<User[]> => {
    const gender = isFemale ? 'female' : 'male'
    return this.http.get<RandomUsers>(`${this._apiBase}/?results=99&gender=${gender}`)
      .pipe(
        map((response) => response.results as User[]),
      );
  }

  getSeededUserSet = (): Observable<User[]> => {
    return this.http.get<RandomUsers>(`${this._apiBase}/?page=3&results=99&seed=main`)
      .pipe(
        map((response => response.results as User[]))
      );
  }
}
