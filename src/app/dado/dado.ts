import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  imports: [],
  templateUrl: './dado.html',
  styleUrl: './dado.css'
})
export class Dado {
  valor: number = Math.floor(Math.random() * 6) + 1;
}
