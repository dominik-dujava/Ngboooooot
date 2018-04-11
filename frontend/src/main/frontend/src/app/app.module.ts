
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MarkComponent} from "./Mark/mark.component";
import {MarkModule} from "./Mark/mark.module";
import {NavbarComponent} from "./Layout/navbar/navbar.component";
import { MarkNewComponent } from './Mark/mark-new/mark-new.component';
import { LoginComponent } from './login/login.component';
import {MarkService} from "./Mark/mark.service";
import {MarkEditComponent} from "./Mark/mark-edit/mark-edit.component";
import {DemoComponent} from "./demo/component";
import {DemoModule} from "./demo/module";
import {CalendarModule} from "angular-calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  { path: 'calendar', component: DemoComponent },
  { path: 'marks/edit/:id', component: MarkEditComponent },
  { path: 'marks/new', component: MarkNewComponent },
  { path: 'marks', component: MarkComponent },
  { path: '', component: NavbarComponent },




  // { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarkNewComponent,
    MarkEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkModule,
    RouterModule.forRoot(
      appRoutes,
      {}
    ),
    DemoModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
  ],
    providers: [ MarkService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
