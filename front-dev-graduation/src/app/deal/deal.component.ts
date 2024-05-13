// deal.component.ts
import { Component, OnInit } from '@angular/core';
import { Deal } from './deal.model'; // Убедитесь, что путь к файлу deal.model.ts верный

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html'
})
export class DealComponent implements OnInit {
  deals: Deal[] = [];
  newDeal: Deal = {
	id: 0,
	description: '',
	price: 0,
	finishDate: new Date(), // Назначаем текущую дату автоматически
	status: ''
  };

  constructor() { }

  ngOnInit(): void {
	// Здесь можно добавить логику инициализации, например, загрузить дела из сервера
  }

  addDeal(event: Event): void {
	event.preventDefault();
	this.deals.push(this.newDeal);
	this.resetNewDeal();
  }

  resetNewDeal(): void {
	this.newDeal = {
	  id: this.deals.length + 1,
	  description: '',
	  price: 0,
	  finishDate: new Date(), // Назначаем текущую дату автоматически
	  status: ''
	};
  }

  deleteDeal(id: number): void {
	this.deals = this.deals.filter(deal => deal.id!== id);
  }

  updateDeal(event: Event, deal: Deal): void {
	event.preventDefault();
	const index = this.deals.findIndex(c => c.id === deal.id);
	if (index!== -1) {
	  this.deals[index] = deal;
	}
  }
}