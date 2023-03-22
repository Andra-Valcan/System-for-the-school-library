import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

@Input() message: string;

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:any)=>
{console.warn(params)
})
    // https://youtu.be/0hEkVDlc1Sg
  }
constructor(private route:ActivatedRoute) {
}
  openNewTab() {
    window.open('/email');
  }

  carteRezervata() {
    alert("Cartea a fost deja rezervata!")
  }

  doReservation(number: number) {
    alert("Cartea a fost rezervata, te asteptam la biblioteca pentru a finaliza imprumutul!!!")
    // this.http.post("http://localhost:8080/api/reservation/addReservation",number);
  }

}
