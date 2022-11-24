import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { CurrentDateTimeComponent } from './current-date-time/current-date-time.component';
import { UcLcComponent } from './uc-lc/uc-lc.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { IncreDecreComponent } from './incre-decre/incre-decre.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    CurrentDateTimeComponent,
    UcLcComponent,
    DropDownComponent,
    FormValidationComponent,
    IncreDecreComponent,
    TodolistComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
