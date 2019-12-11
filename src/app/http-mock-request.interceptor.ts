import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HEROESMock } from './mock-heroes';

const httpMockedResponces = [
    {
        url: 'api/heroes',
        data: HEROESMock
    }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const mockedResponce of httpMockedResponces) {
            if (request.url === mockedResponce.url) {
                console.log('Loaded from json : ' + request.url);
                let httpResponce = new HttpResponse({ status: 200, body: ((mockedResponce.data) as any) });
                httpResponce.body
                return of(httpResponce);
            }
        }
        console.log('Loaded from http call :' + request.url);
        return next.handle(request);
    }
}