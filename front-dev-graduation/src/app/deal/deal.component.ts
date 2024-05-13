// deal.component.ts
import { Component, OnInit } from '@angular/core';
import { Deal } from './deal.model'; // Убедитесь, что путь к файлу deal.model.ts верный
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-deal',
	templateUrl: './deal.component.html'
})
export class DealComponent implements OnInit {
	deals: Deal[] = [];
	newDeal: Deal = {
		description: '',
		price: 0,
		finishDate: new Date(), // Назначаем текущую дату автоматически
		status: ''
	} as any;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Deal[]>('http://localhost:3000/deals').subscribe(deals => {
			this.deals = deals;
		});
	}

	addDeal(event: Event): void {
		event.preventDefault();
		this.http.post('http://localhost:3000/deals', this.newDeal).subscribe(
			(response) => {
				console.log('Deal added successfully', response);
				this.deals.push(response as any);
			},
			(error) => {
				console.error('Error adding deal', error);
			}
		)
		this.resetNewDeal();
	}

	resetNewDeal(): void {
		this.newDeal = {
			description: '',
			price: 0,
			finishDate: new Date(), // Назначаем текущую дату автоматически
			status: ''
		} as any;
	}

	deleteDeal(id: number): void {
		this.http.delete(`http://localhost:3000/deals/${id}`).subscribe(
			(response) => {
				console.log('Deal deleted successfully', response);
				this.deals = this.deals.filter(deal => deal.id !== id);
			},
			(error) => {
				console.error('Error deleting deal', error);
			}
		);
	}

	updateDeal(event: Event, deal: Deal): void {
		event.preventDefault();
		this.http.put(`http://localhost:3000/deals/${deal.id}`, deal).subscribe(
			(response) => {
				console.log('Deal updated successfully', response);
				const index = this.deals.findIndex(c => c.id === deal.id);
				if (index !== -1) {
					this.deals[index] = response as any;
				}
			},
			(error) => {
				console.error('Error updating deal', error);
			}
		);
	}
}