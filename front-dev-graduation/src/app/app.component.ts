// task-manager.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'lw6';
   idCnt = 1;
   tasks: Task[] = [];
   newTask: any = {
      type: 'task',
      priority: 'medium',
      status: 'To Do',
      title: '',
      creator: ''
   };

   constructor() { }

   addTask(event: Event): void {
      event.preventDefault();

      this.newTask.id = this.idCnt++;
      this.newTask.createdAt = new Date();
      this.newTask.updatedAt = new Date();
      this.tasks.push(this.newTask);

      this.newTask = {
         type: 'task',
         priority: 'medium',
         status: 'To Do',
         title: '',
         creator: ''
      };
   }

   deleteTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
   }

   updateTask(task: Task): void {
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
         this.tasks[index] = task;
         this.tasks[index].updatedAt = new Date();
      }
   }
}