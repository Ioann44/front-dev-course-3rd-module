// complaint.component.ts
import { Component, OnInit } from '@angular/core';
import { Complaint } from './complaint.model';

@Component({
	selector: 'app-complaint',
	templateUrl: './complaint.component.html'
})
export class ComplaintComponent implements OnInit {
	complaints: Complaint[] = [];
	newComplaint: Complaint = {
		id: 0,
		description: '',
		status: '',
		createdAt: new Date()
	};

	constructor() { }

	ngOnInit(): void {
		// Здесь можно добавить логику инициализации, например, загрузить жалобы из сервера
	}

	addComplaint(event: Event): void {
		event.preventDefault();
		this.newComplaint.createdAt = new Date();
		this.complaints.push(this.newComplaint);
		this.resetNewComplaint();
	}

	resetNewComplaint(): void {
		this.newComplaint = {
			id: this.complaints.length + 1,
			description: '',
			status: '',
			createdAt: new Date()
		};
	}

	deleteComplaint(id: number): void {
		this.complaints = this.complaints.filter(complaint => complaint.id !== id);
	}

	updateComplaint(event: Event, complaint: Complaint): void {
		event.preventDefault();
		const index = this.complaints.findIndex(c => c.id === complaint.id);
		if (index !== -1) {
			this.complaints[index] = complaint;
		}
	}
}