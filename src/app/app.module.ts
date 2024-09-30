import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/components/login.module';
import { FirstTimeLoginModule } from './pages/first-time-login/components/first-time-login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    FirstTimeLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
