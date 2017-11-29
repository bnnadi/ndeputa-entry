import { Injectable } from '@angular/core';
import { HttpService } from 'app/core/http.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TimesheetService {

  constructor(private http: HttpService) {}

  sendTime(body: Object) {
    return this.http.post('clockInOut', body)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

}
