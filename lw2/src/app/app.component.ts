import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';

  greet() {
    alert("Привет" + (this.name ? ", " + this.name : ""));
  }

  ngOnChanges(): void {
    console.log('1) Начальная установка свойств');
  }
  ngOnInit(): void {
    console.log('2) Инициализация компонента');
  }
  ngDoCheck(): void {
    console.log('3) Проверка изменений свойств компонента');
  }
  ngAfterContentInit(): void {
    console.log('4) Вставка содержимого в представление компонента');
  }
  ngAfterContentChecked(): void {
    console.log(
      '5) Проверка изменений содержимого, которое добавляется в представление компонента'
    );
  }

  ngAfterViewInit(): void {
    console.log('6) Инициализация представления компонента/ и дочерних');
  }

  ngAfterViewChecked(): void {
    console.log('7) Проверка на изменения в представлении компонента (прошла)');
  }

  ngOnDestroy(): void {
    console.log('8) Удаление компонента');
  }
}
