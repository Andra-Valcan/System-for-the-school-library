import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {FormControl, FormGroup, NgForm, ɵValue} from "@angular/forms";
// import {User} from "../model/User";
//


class User {
  private _email: string;
  private _id: number;
  private _name: string;
  private _year: number;


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  constructor() {

  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit{

message: ɵValue<FormControl<string | null>> | undefined ="Andra"
  login = new  FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });
  // @ts-ignore
  current_user = new User();
 // public current_user: User;
  @Input() redirectToStudent: string="/home"
  @Input() redirectToLibrarian: string="/book-management"



  constructor(public router: Router, private http: HttpClient) { }


  check(email:any, password:any){
    return this.http.get<User>(`http://localhost:8080/api/user/checkUser/${email}/${password}`);


  }
  user:User;
  public checkEmail(): void {


    this.check(this.login.value.email,this.login.value.password).subscribe((data:User)=> {
      this.user=data
      //console.warn(this.user)
      if(data==null){
        this.login.reset()
        alert("Parola sau adresa de email au fost introduse gresit")

      } else{
      this.current_user=data;
        if (this.current_user.email == "andrada.valcan@gmail.com") {

          this.router.navigateByUrl(this.redirectToLibrarian);
        }else{this.message = this.login.value.email;
        //  this.router.navigateByUrl(this.redirectToStudent);
this.router.navigate(['/home'],{queryParams:{data:this.user.email}})
        }

      }

    });





  }

  ngOnInit(): void {
  }


}
