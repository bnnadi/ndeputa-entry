import { Injectable } from '@angular/core';
import { HttpService } from 'app/core/http.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  authentication() {
    return this.http.get('authenticate')
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error))
  }

  isAuthenticated() {
    const apiKey = localStorage.getItem('apiKey');
    return (apiKey) ? true : false;
  }
}
