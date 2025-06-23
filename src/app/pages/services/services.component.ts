import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  pageTitle: string = 'Services I Offer';
  services = inject(DataService).getServices();

  // Məlumatları birbaşa servisdən alırıq
  private dataService = inject(DataService);
  aboutData = this.dataService.getAboutData();

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
