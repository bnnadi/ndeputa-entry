import { BaseRequestOptions } from '@angular/http';

export class CustomReqeustOptions extends BaseRequestOptions {

    public apiKey: string;

    constructor(customOptions?: any) {

        super();

            const apiKey = localStorage.getItem('apiKey');
            this.apiKey = apiKey;
            this.headers.append('Content-Type', 'application/json');
            this.headers.append('Authorization', 'JWT ' + this.apiKey);
    }

}
