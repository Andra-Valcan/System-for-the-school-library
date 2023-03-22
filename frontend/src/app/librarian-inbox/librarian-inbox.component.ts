import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-librarian-inbox',
  templateUrl: './librarian-inbox.component.html',
  styleUrls: ['./librarian-inbox.component.css']
})
export class LibrarianInboxComponent implements OnInit{
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

  messages = [
    "Hi",
    "Welcome to our secure message platform",
    "We donnot share your privacy",
    "Not sell your privacy to potential buyers..."
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.frmMessage = this.fb.group({
      message: new FormControl(null)
    });
  }

  ngAfterViewInit() {}

  ngAfterViewChecked() {
  //  this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement.scrollHeight;
  }

  send() {
    const message = this.frmMessage.get("message");
    if (message?.value){
    // @ts-ignore
    console.log(message.value);
// @ts-ignore
    if(message.value!=null){
    // @ts-ignore
    this.messages.push(message.value);}

    // clear
    // @ts-ignore
    message.setValue("");}
  }
}
