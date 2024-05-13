// complaint.component.ts
import { Component, OnInit } from '@angular/core';
import { Complaint } from './complaint.model';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-complaint',
	templateUrl: './complaint.component.html'
})
export class ComplaintComponent implements OnInit {
	complaints: Complaint[] = [];
	newComplaint: Complaint = {
		description: '',
		status: '',
		createdAt: new Date()
	} as any;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Complaint[]>('http://localhost:3000/complaints').subscribe(complaints => {
			this.complaints = complaints;
		});
	}

	addComplaint(event: Event): void {
		event.preventDefault();
		this.newComplaint.createdAt = new Date();
		this.http.post('http://localhost:3000/complaints', this.newComplaint).subscribe(
			(response) => {
				console.log('Complaint added successfully', response);
				this.complaints.push(response as any);
			},
			(error) => {
				console.error('Error adding complaint', error);
			}
		)
		this.resetNewComplaint();
	}

	resetNewComplaint(): void {
		this.newComplaint = {
			description: '',
			status: '',
			createdAt: new Date()
		} as any;
	}

	deleteComplaint(id: number): void {
		this.http.delete(`http://localhost:3000/complaints/${id}`).subscribe(
			(response) => {
				console.log('Complaint deleted successfully', response);
				this.complaints = this.complaints.filter(complaint => complaint.id !== id);
			},
			(error) => {
				console.error('Error deleting complaint', error);
			}
		);
	}

	updateComplaint(event: Event, complaint: Complaint): void {
		event.preventDefault();
		this.http.put(`http://localhost:3000/complaints/${complaint.id}`, complaint).subscribe(
			(response) => {
				console.log('Complaint updated successfully', response);
				const index = this.complaints.findIndex(c => c.id === complaint.id);
				if (index !== -1) {
					this.complaints[index] = response as any;
				}
			},
			(error) => {
				console.error('Error updating complaint', error);
			}
		);
	}
}