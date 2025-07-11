import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowBiteService } from './service/flowBite/flow-bite-service';
import { initFlowbite } from 'flowbite';
import { NavBar } from "./components/nav-bar/nav-bar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'products';
   constructor(private flowbiteService: FlowBiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
