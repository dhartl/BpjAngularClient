import { Injectable } from '@angular/core';

@Injectable()
export class AuthManagerService {
     private token: string;

     createToken(username: string, password: string) : string {
         return btoa(username + ":"+password);
     }

     setToken(token : string) {
         this.token = token;
     }

     getToken(): string {
         return this.token;
     }
}