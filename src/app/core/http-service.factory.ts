import { XHRBackend } from '@angular/http';
import { CustomReqeustOptions } from './request-options';
import { HttpService } from './http.service';


function httpServiceFactory(backend: XHRBackend, opitions: CustomReqeustOptions) {
    return new HttpService(backend, opitions);
}

export { httpServiceFactory };
