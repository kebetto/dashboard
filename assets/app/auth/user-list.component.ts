import { Component, Input } from '@angular/core';

import { User } from './user.model';

@Component({
    selector: 'app-user-list',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent {
    @Input() users: User[] = [];
}