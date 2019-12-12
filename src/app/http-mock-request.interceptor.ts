import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HEROESMock } from './mock-hero-data';
import { POWERSMock } from './mock-power-data';

const httpMockedResponces = [
    {
        url: 'api/heroes',
        data: HEROESMock
    },
    {
        url: 'api/heroes/11',
        data: HEROESMock[0]
    },
    {
        url: 'api/heroes/12',
        data: HEROESMock[1]
    },
    {
        url: 'api/heroes/13',
        data: HEROESMock[2]
    },
    {
        url: 'api/heroes/14',
        data: HEROESMock[3]
    },
    {
        url: 'api/heroes/15',
        data: HEROESMock[4]
    },
    {
        url: 'api/heroes/16',
        data: HEROESMock[5]
    },
    {
        url: 'api/heroes/17',
        data: HEROESMock[6]
    },
    {
        url: 'api/heroes/18',
        data: HEROESMock[7]
    },
    {
        url: 'api/heroes/19',
        data: HEROESMock[8]
    },
    {
        url: 'api/heroes/20',
        data: HEROESMock[9]
    },

    {
        url: 'api/powers/?heroId=11',
        data: POWERSMock[11]
    },
    {
        url: 'api/powers/?heroId=12',
        data: POWERSMock[12]
    },
    {
        url: 'api/powers/?heroId=13',
        data: POWERSMock[13]
    },
    {
        url: 'api/powers/?heroId=14',
        data: POWERSMock[14]
    },
    {
        url: 'api/powers/?heroId=15',
        data: POWERSMock[15]
    },
    {
        url: 'api/powers/?heroId=16',
        data: POWERSMock[16]
    },
    {
        url: 'api/powers/?heroId=17',
        data: POWERSMock[17]
    },
    {
        url: 'api/powers/?heroId=18',
        data: POWERSMock[18]
    },
    {
        url: 'api/powers/?heroId=19',
        data: POWERSMock[19]
    },
    {
        url: 'api/powers/?heroId=20',
        data: POWERSMock[20]
    },

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