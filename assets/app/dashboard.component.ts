import { Component, OnInit } from '@angular/core';

import { User } from './auth/user.model';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    users:User[] = [];

    constructor(private authService: AuthService){}
    
    ngOnInit(){
        this.authService.getUsers()
            .subscribe(
            (users: User[]) => {
                this.users = users;
                console.log(this.users);
            },
            error => console.log(error)
        );
        // console.log(this.authService.getUsers());
    }
}