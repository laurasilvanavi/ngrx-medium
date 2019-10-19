import { Injectable } from "@angular/core";
import { IUserHttp } from "../models/http-models/user-http.interface";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(this.usersUrl);
  }
}
