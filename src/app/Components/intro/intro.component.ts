import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  blogs = [];


  ngOnInit() {
      // @ts-ignore
      this.blogs = JSON.parse(localStorage.getItem("blogs"))

  }

}
