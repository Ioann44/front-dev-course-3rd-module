// customer.component.ts
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model'; // Убедитесь, что путь к файлу customer.model.ts верный
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
	customers: Customer[] = [];
	newCustomer: Customer = {
		firstName: '',
		lastName: '',
		contactInfo: '',
		history: '',
		status: ''
	} as any;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Customer[]>('http://localhost:3000/customers').subscribe(customers => {
			this.customers = customers;
		});
	}

	addCustomer(event: Event): void {
		event.preventDefault();
		this.http.post('http://localhost:3000/customers', this.newCustomer).subscribe(
			(response) => {
				console.log('Customer added successfully', response);
				this.customers.push(response as any);
			},
			(error) => {
				console.error('Error adding customer', error);
			}
		)
		this.resetNewCustomer();
	}

	resetNewCustomer(): void {
		this.newCustomer = {
			firstName: '',
			lastName: '',
			contactInfo: '',
			history: '',
			status: ''
		} as any;
	}

	deleteCustomer(id: number): void {
		this.http.delete(`http://localhost:3000/customers/${id}`).subscribe(
			(response) => {
				console.log('Customer deleted successfully', response);
				this.customers = this.customers.filter(customer => customer.id !== id);
			},
			(error) => {
				console.error('Error deleting customer', error);
			}
		);
	}

	updateCustomer(event: Event, customer: Customer): void {
		event.preventDefault();
		this.http.put(`http://localhost:3000/customers/${customer.id}`, customer).subscribe(
			(response) => {
				console.log('Customer updated successfully', response);
				const index = this.customers.findIndex(c => c.id === customer.id);
				if (index !== -1) {
					this.customers[index] = response as any;
				}
			},
			(error) => {
				console.error('Error updating customer', error);
			}
		);
	}
}