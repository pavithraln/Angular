import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    SearchuserComponent,
    DisplayuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
