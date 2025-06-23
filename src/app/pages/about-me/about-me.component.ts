import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutComponent {
  // Məlumatları birbaşa servisdən alırıq
  private dataService = inject(DataService);
  aboutData = this.dataService.getAboutData();

  // HTML-də birbaşa aboutData.name, aboutData.title kimi istifadə edəcəksiniz.

  callToAction = {
    text: 'Check out my projects or contact me!!',
    projectLink: '/projects',
    contactLink: '/contact',
  };

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
