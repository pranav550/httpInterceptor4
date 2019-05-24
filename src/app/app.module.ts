import { GlobalHttpInterceptorService } from './GlobalHttpInterceptorService';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
