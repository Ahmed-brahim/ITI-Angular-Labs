import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./Components/button/button";
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cards';
}
