import { Injectable } from '@angular/core';
import { HttpService } from 'app/core/http.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { ElectronService } from 'app/providers/electron.service';

@Injectable()
export class AuthService {
  constructor(private http: HttpService, private es: ElectronService) {}

  authentication() {
    return this.http.get('authenticate')
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error))
  }

  isAuthenticated() {
    const apiKey = this.es.get('apiKey');
    return (apiKey) ? true : false;
  }
}
