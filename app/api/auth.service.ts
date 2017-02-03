import { AuthManagerService } from './authManager.service';
import { Injectable } from '@angular/core';
import { BpjApiService } from '../api/bpjApi.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

   

    constructor(private bpjApiService: BpjApiService, private authManagerService: AuthManagerService) {

    }

    login(username: string, password: string) : Observable<boolean> {
        this.authManagerService.setToken(this.authManagerService.createToken(username, password))
        return this.bpjApiService.login().map(result => {
            return true;   
        }).catch( (err) => {
            return Observable.of(false);
        });
    }

    logout(){
        this.authManagerService.setToken(undefined);
    }

    isAuthenticated() : boolean {
        return this.authManagerService.getToken() != undefined;
    }

}