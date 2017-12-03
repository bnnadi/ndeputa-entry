import { BaseRequestOptions, URLSearchParams } from '@angular/http';

export class CustomReqeustOptions extends BaseRequestOptions {

    public apiKey: string;

    constructor(customOptions?: any) {

        super();

        this.apiKey = window.localStorage.getItem('apikey');
        this.headers.append('Content-Type', 'application/json');
        console.log(this);
        this.params = new URLSearchParams();
        this.params.set('key', this.apiKey)
    }

}
