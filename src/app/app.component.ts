import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroComponent } from "./Components/intro/intro.component";
import { MainContentComponent } from './Components/main-content/main-content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogSite';
}
