import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanceFormComponent } from './distance-form/distance-form.component';
import { CommonModule } from '@angular/common';
import { GetDistanceService } from './services/get-distance.service';

@NgModule({
  declarations: [
    AppComponent,
    DistanceFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GetDistanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
