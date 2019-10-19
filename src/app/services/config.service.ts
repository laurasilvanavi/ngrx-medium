import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IConfig } from 'src/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = `${environment.apiUrl}config.json`

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<IConfig>{
    return this._http.get<IConfig>(this.configUrl);
  }
}
