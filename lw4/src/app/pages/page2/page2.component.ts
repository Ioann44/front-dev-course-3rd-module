import { Component } from '@angular/core';

export class NameObj {
  constructor(public name: string) { }
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  names: NameObj[] = [];

  name = '';

  addName() {
    this.names.push(new NameObj(this.name));
    this.name = '';
  }

  onNameChange() {
    console.log(`Новое значение имени: ${this.name}`);
  }
}
