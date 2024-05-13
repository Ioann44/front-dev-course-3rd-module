// customer.component.ts
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model'; // Убедитесь, что путь к файлу customer.model.ts верный

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
	customers: Customer[] = [];
	newCustomer: Customer = {
		id: 0,
		firstName: '',
		lastName: '',
		contactInfo: '',
		history: '',
		status: ''
	};

	constructor() { }

	ngOnInit(): void {
		// Здесь можно добавить логику инициализации, например, загрузить клиентов из сервера
	}

	addCustomer(event: Event): void {
		event.preventDefault();
		this.customers.push(this.newCustomer);
		this.resetNewCustomer();
	}

	resetNewCustomer(): void {
		this.newCustomer = {
			id: this.customers.length + 1,
			firstName: '',
			lastName: '',
			contactInfo: '',
			history: '',
			status: ''
		};
	}

	deleteCustomer(id: number): void {
		this.customers = this.customers.filter(customer => customer.id !== id);
	}

	updateCustomer(event: Event, customer: Customer): void {
		event.preventDefault();
		const index = this.customers.findIndex(c => c.id === customer.id);
		if (index !== -1) {
			this.customers[index] = customer;
		}
	}
}