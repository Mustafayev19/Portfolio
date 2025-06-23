import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  pageTitle: string = 'My Skills & Technical Expertise';
  skillCategories = inject(DataService).getSkillCategories();
  // Məlumatları birbaşa servisdən alırıq
  private dataService = inject(DataService);
  aboutData = this.dataService.getAboutData();

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
