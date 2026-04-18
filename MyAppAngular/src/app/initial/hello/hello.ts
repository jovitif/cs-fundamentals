import { Component, EventEmitter, Input, Output, output, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  Acao = () => alert('Ação executada!');
  @Input() items = [];
  @Output() itemClicked = new EventEmitter<any>();
  counter = signal(0);
  AddCounter = () => this.counter.update(value => value + 1);
}
