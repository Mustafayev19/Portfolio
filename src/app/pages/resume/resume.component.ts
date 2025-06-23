import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  private dataService = inject(DataService);
  resumeData = this.dataService.getResumeData();

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
