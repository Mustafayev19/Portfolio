import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  pageTitle: string = 'My Projects';

  private dataService = inject(DataService);
  projects = this.dataService.getProjects();

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
