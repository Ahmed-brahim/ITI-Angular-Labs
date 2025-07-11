import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./Components/button/button";
import { StudentCards } from "./Components/student-cards/student-cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, StudentCards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cards';
}
