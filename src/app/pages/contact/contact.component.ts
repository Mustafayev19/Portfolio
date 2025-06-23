import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; // Form üçün modullar
import { DataService } from '../../data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ReactiveFormsModule əlavə edildi
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private dataService = inject(DataService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  contactData = this.dataService.getContactData();

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
