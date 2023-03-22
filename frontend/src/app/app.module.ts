import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { LibrarianMenuComponent } from './librarian-menu/librarian-menu.component';
import {LoginComponent} from "./login/login.component";

import { LibrarianInboxComponent } from './librarian-inbox/librarian-inbox.component';
import { StudentInboxComponent } from './student-inbox/student-inbox.component';
import { StudentLoansComponent } from './student-loans/student-loans.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { BookManagementComponent } from './book-management/book-management.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SearchPipe } from './search.pipe';
import {MatDialogModule} from "@angular/material/dialog";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from "@angular/material/table";




@NgModule({
  //for generate a new component->ng generate component component_name sau ng g c component_name
  declarations: [
    AppComponent,
    StudentMenuComponent,
    LibrarianMenuComponent,
    LoginComponent,

    LibrarianInboxComponent,
    StudentInboxComponent,
    StudentLoansComponent,
    SearchComponent,
    HomeComponent,
    StudentManagementComponent,
    BookManagementComponent,
    SearchPipe,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserModule,
        MatDialogModule,
        NgbModule,
        MatTableModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
