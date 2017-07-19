import { Http, Response, Headers } from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import {User} from './user.model';

@Injectable()
export class AuthService{
    private users: User[] = [];

    constructor(private http: Http){}     
    
    getUsers() {
        return this.http.get('http://localhost:3000/user')
            .map((response: Response) => {
                const users = response.json().obj;
                let transformedUsers: User[] = [];
                for (let user of users) {
                    transformedUsers.push(new User(
                        user.email,
                        user.firstName,
                        user.lastName,
                        user.password,
                        user.role,
                        user.account)
                    );
                }
                this.users = transformedUsers;
                return transformedUsers;
            })
            .catch((error: Response) => {
               // this.errorService.handleError(error.json());
                return Observable.throw(error);
            });
       }
}