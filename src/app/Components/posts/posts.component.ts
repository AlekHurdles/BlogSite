import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  constructor() { }

  blogs: Blogs[] = [];

  ngOnInit(): void {
    this.blogs = JSON.parse(<string>localStorage.getItem("blogs"));
    console.log(this.blogs)
  }

  removeBlog(blog: Blogs){
    let index = this.blogs.indexOf(blog)
    this.blogs.splice(index,1)
    localStorage.setItem("blogs", JSON.stringify(this.blogs))
    alert("Post has been deleted")
  }
}

export interface Blogs{
  title:string;
  content:string;
}
