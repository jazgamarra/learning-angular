import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre = ''
  fijarNombre1() {
    this.nombre = 'Juan';
  }
  fijarNombre2() {
    this.nombre = 'Ana';
  }
}
