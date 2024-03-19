import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  intro = " My name is Aleksandra Anderson. I am a creative Software Engineer with a sharp and curious mind." +
    " I found my passion for software engineering while in college, as it allowed me to express my creativity through my solutions to complex problems." +
    " I am experienced with front-end and back-end technologies, granting me the ability to create responsive and classy web and mobile services. " +
    "Check out the rest of the site for a look into my work. Enjoy!";
  blogs = [];


  ngOnInit() {
      // @ts-ignore
      this.blogs = JSON.parse(localStorage.getItem("blogs"))

  }

}
