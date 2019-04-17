/*
export class Resolve {
}
*/
import { Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';

export interface EndpointComponent {
    endpoint: string;
}

@Injectable()
export class Resolveservice implements Resolve<EndpointComponent> {

    constructor(private _apiService: ApiService, private router: Router, private cookieService: CookieService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        // let id = route.params['id'];

       /* let endpoint: any = route.data;
        let condition: any = {};
        if ( endpoint.condition != '_id' || endpoint.condition != null) {
            for (let v in endpoint.condition) {
                if (v == '_id') {
                    endpoint.condition[v] = route.params.id;
                    console.log(route.params.id);
                }
            }
        } else {
        }*/

       /* console.log('resolve route data');
        console.log(route.data);
        console.log(route.data.source);
        console.log(route);
        console.log(state);*/
        // let endpoint = route.data.object;
        // console.log('endpoint!!!!!');
        // console.log(endpoint);
        return new Promise((resolve) => {
            if(route.data.server=='audiodeadline'){
                this._apiService.getEndpointforudiedeadline(route.data).subscribe(api_object => {
                    console.log('api_object  !!!!');
                    console.log(api_object);
                    if (api_object) {
                        return resolve(api_object);
                    } else { // id not found
                        this.router.navigateByUrl('login');
                        return true;
                    }
                });
            }
            else{
                console.log('route.data --  in resolve ');
                console.log(route.data);
                console.log(route.params);
                if(route.data.condition!=null && route.data.condition.myid !=null && route.data.condition.myid=='id')
                    route.data.condition._id=this.cookieService.get('id');
                  //  route.data.condition._id=route.params.id;
                this._apiService.getEndpoint(route.data).subscribe(api_object => {
                    console.log('api_object  !!!!');
                    console.log(api_object);
                    if (api_object) {
                        return resolve(api_object);
                    } else { // id not found
                        this.router.navigateByUrl('login');
                        return true;
                    }
                });
            }
        });
    }
}
