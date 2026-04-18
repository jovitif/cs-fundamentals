import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from "./initial/hello/hello";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'João';
  items = ['apple', 'banana', 'orange'] as any;
  GerarRelatorio = () => alert('Gerar relatório');
}
