import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./Components/hero/hero";
import { NavBar } from "./Components/nav-bar/nav-bar";
import { About } from "./Components/about/about";
import { Skills } from "./Components/skills/skills";
import { Projects } from "./Components/projects/projects";
import { Education } from "./Components/education/education";
import { Certficates } from "./Components/certficates/certficates";
import { Contact } from "./Components/contact/contact";
import { Footer } from "./Components/footer/footer";
import { Script } from "./Components/script/script";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, NavBar, About, Skills, Projects, Education, Certficates, Contact, Footer, Script],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
