import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { CurrentDateTimeComponent } from './current-date-time/current-date-time.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { IncreDecreComponent } from './incre-decre/incre-decre.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UcLcComponent } from './uc-lc/uc-lc.component';

const routes: Routes = [{path:"comp1",component:Component1Component},{path:"comp2",component:Component2Component},
{path:"Date_time",component:CurrentDateTimeComponent},{path:"uc_lc",component:UcLcComponent}
,{path:"drop-down",component:DropDownComponent},
{path:"form",component:FormValidationComponent},
{path:"++--",component:IncreDecreComponent},
{path:"to_do_list",component:TodolistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
