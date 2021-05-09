import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent, UserDetailComponent, HomeComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateSuccessComponent } from './components/update-success/update-success.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserDetailComponent,
    HomeComponent,
    UpdateSuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
