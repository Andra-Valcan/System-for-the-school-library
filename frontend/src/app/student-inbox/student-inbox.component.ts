import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {User} from "../model/User";

@Component({
  selector: 'app-student-inbox',
  templateUrl: './student-inbox.component.html',
  styleUrls: ['./student-inbox.component.css']
})
export class StudentInboxComponent {
  public show:boolean = false;
  public buttonName:any = 'Show';
  public ssr:boolean=true



  toggle() {
    this.show = !this.show;
    this.ssr=!this.ssr
    // Change the name of the button.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  @ViewChild("messageContainer") mContainer: ElementRef;
  frmMessage: FormGroup;
  user:User;
message='';
  messages = [

  ];
  username="username";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.frmMessage = this.fb.group({
      message: new FormControl(null)
    });
  }



  send() {
    const message = this.frmMessage.get("message");
    if (message?.value){

      console.log(message.value);

      if(message.value!=null){

        // @ts-ignore
       this.messages.push(message.value);
      
//console.warn(this.messages)
      }

// console.warn(this.user.messages)
      message.setValue("");}
  }
}
