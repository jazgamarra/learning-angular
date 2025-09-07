import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dado } from './dado/dado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'project01';
}
