import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {BookManagementComponent} from "./book-management/book-management.component";
import {LibrarianInboxComponent} from "./librarian-inbox/librarian-inbox.component";
import {SearchComponent} from "./search/search.component";
import {StudentInboxComponent} from "./student-inbox/student-inbox.component";
import {StudentLoansComponent} from "./student-loans/student-loans.component";
import {StudentManagementComponent} from "./student-management/student-management.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'book-management', component: BookManagementComponent},
  {path: 'home', component: HomeComponent},
  {path: 'librarian-inbox', component: LibrarianInboxComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'student-inbox', component: StudentInboxComponent},
  {path: 'student-loans', component: StudentLoansComponent},
  {path:'student-management',component:StudentManagementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
