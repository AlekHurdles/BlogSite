import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  addBlog(title: HTMLInputElement, content: HTMLInputElement){
     let blogs = [];
     let blog = { "title": title.value, "content": content.value };

    if(localStorage.getItem("blogs")){
      blogs = JSON.parse(<string>localStorage.getItem("blogs"))
    }

    blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(blogs))
    title.value="";
    content.value = "";
    alert("Blog submitted! ")
  }

}

export interface Blogs{
  title:string;
  content:string;
}
