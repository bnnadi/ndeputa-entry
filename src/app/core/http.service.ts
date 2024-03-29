import { Injectable } from '@angular/core';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { CustomReqeustOptions } from './request-options';
import { HttpClient } from '@angular/common/http/src/client';

@Injectable()
export class HttpService extends Http {

    apiUrl = 'http://localhost:3006/api/v1/';

    constructor( backend: XHRBackend, defaultOptions: CustomReqeustOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {

        return super.get(this.getFullUrl(url), this.requestOptions(options))
                .catch(this.onCatch)
                .do((res: Response) => {
                    this.onSuccess(res.json());
                }, (error: any) => {
                    this.onError(error);
                })
                .finally(() => {
                    this.onEnd();
                })
          }

    post(url: string, body: Object, options?: RequestOptionsArgs): Observable<any> {

        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
                .catch(this.onCatch)
                .do((res: Response) => {
                    this.onSuccess(res.json());
                }, (error: any) => {
                    this.onError(error);
                })
                .finally(() => {
                    this.onEnd();
                })
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
         if (options == null) {
             options = new CustomReqeustOptions();
         }

         if (options.headers == null) {
             options.headers = new Headers();
         }

         return options;
    }

    private getFullUrl(url: string): string {
        return this.apiUrl + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log('Request Successful');
    }

    private onError(res: Response): void {
        console.log('Error, status code: ' + res.status);
    }

    private onEnd(): void {
      console.log('Request End');
    }

}
