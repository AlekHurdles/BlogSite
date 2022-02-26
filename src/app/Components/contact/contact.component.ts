import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: any;
  email: any;
  message: any;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const message = `My name is ${this.name}`
    alert(message)

  }
}
