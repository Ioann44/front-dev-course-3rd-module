// task-manager.component.ts
import { Component, OnInit, numberAttribute } from '@angular/core';
import { Customer } from './customer.model';


@Component({
	selector: 'app-root',
	templateUrl: './customer.component.html'
})
export class CustomerComponent {
	title = 'lw6';
	idCnt = 1;
	tasks: Customer[] = [];
	newTask!: Customer;

	constructor() { this.resetTask(); }

	resetTask(): void {
		this.newTask = {
			id: this.idCnt++,
			firstName: "",
			lastName: "",
			contactInfo: "",
			history: [],
			status: ""
		}
	}

	addTask(event: Event): void {
		event.preventDefault();
		this.tasks.push(this.newTask);
		this.resetTask();
	}

	deleteTask(id: number): void {
		this.tasks = this.tasks.filter(task => task.id !== id);
	}

	updateTask(task: Customer): void {
		const index = this.tasks.findIndex(t => t.id === task.id);
		if (index !== -1) {
			this.tasks[index] = task;
		}
	}
}