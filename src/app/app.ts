import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
