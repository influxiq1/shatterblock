import { HttpClient } from '@angular/common/http';
export declare class ApiService {
    private _http;
    private _authHttp;
    constructor(_http: HttpClient, _authHttp: HttpClient);
    isTokenExpired(): void;
    getclientip(): import("rxjs").Observable<Object>;
    getEndpoint(endpoint: any): import("rxjs").Observable<Object>;
    getData(endpoint: any): import("rxjs").Observable<Object>;
    postData(endpoint: any, data: any): import("rxjs").Observable<Object>;
    postDatawithoutToken(endpoint: any, data: any): import("rxjs").Observable<Object>;
    postlogin(endpoint: any, data: any): import("rxjs").Observable<Object>;
    putData(endpoint: any, data: any, id: any): import("rxjs").Observable<Object>;
    deteOneData(endpoint: any, data: any, token: any, source: any): import("rxjs").Observable<Object>;
    private getEndpointUrl;
}
