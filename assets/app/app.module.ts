import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import {UserListComponent} from './auth/user-list.component';
import { AuthService } from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent, DashboardComponent, UserListComponent
    ],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent],
    providers:[AuthService]
})
export class AppModule {

}