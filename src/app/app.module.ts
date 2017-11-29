import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { httpServiceFactory } from './core/http-service.factory';
import { HttpService } from './core/http.service';
import { TimesheetService } from './providers/timesheet.service';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService,
    {
        provide: HttpService,
        useFactory: httpServiceFactory,
        deps: [XHRBackend, RequestOptions]
    }, AuthGuard, AuthService, TimesheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
