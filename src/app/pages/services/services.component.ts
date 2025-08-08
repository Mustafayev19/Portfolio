import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink], // RouterLink əlavə edildi
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  pageTitle: string = 'What I Offer';
  private dataService = inject(DataService);
  services = this.dataService.getServices(); // Dəyişənin adı 'services' olmalıdır

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
