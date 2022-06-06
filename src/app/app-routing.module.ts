import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {IntroComponent} from "./Components/intro/intro.component";
import {AddBLogComponent} from "./Components/add-blog/add-blog.component";
import { PostsComponent } from "./Components/posts/posts.component";
import {ContactComponent} from "./Components/contact/contact.component";

const routes: Routes = [
  {path:"",
  component: IntroComponent},
  {path: "add-blog",
    component: AddBLogComponent
  },
  { path:"posts", component: PostsComponent},
  {path:"contact", component: ContactComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
