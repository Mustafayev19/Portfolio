import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
} from '@angular/animations';
import { Router } from '@angular/router';

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  year?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  pageTitle: string = 'My Projects';

  projects: Project[] = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description:
        'A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel for managing products and orders.',
      imageUrl: 'images/profile.jpeg', // Placeholder path
      technologies: [
        'Angular',
        'TypeScript',
        'NgRx',
        'Node.js',
        'Express',
        'MongoDB',
        'Tailwind CSS',
      ],
      liveUrl: 'https://example-ecommerce.com',
      repoUrl: 'https://github.com/yourusername/ecommerce-project',
      year: '2024',
    },
    {
      id: 2,
      name: 'Portfolio Website',
      description:
        'This very portfolio website, built to showcase my skills and projects. Features smooth animations and a responsive design.',
      imageUrl: 'images/profile.jpeg', // Placeholder path
      technologies: [
        'Angular',
        'TypeScript',
        'Angular Animations',
        'Tailwind CSS',
      ],
      liveUrl: '#', // Current site
      repoUrl: 'https://github.com/yourusername/portfolio-angular',
      year: '2025',
    },
    {
      id: 3,
      name: 'Task Management App',
      description:
        'A Kanban-style task management application allowing users to create, organize, and track tasks across different stages of completion.',
      imageUrl: 'images/profile.jpeg', // Placeholder path
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Angular Material'],
      liveUrl: 'https://example-taskapp.com',
      repoUrl: 'https://github.com/yourusername/task-management-app',
      year: '2023',
    },
    {
      id: 4,
      name: 'Weather Dashboard',
      description:
        'A web application that displays current weather conditions and forecasts for multiple locations using a third-party weather API.',
      imageUrl: 'images/profile.jpeg', // Placeholder path
      technologies: ['Angular', 'RxJS', 'HttpClientModule', 'Bootstrap'],
      // liveUrl: "https://example-weatherapp.com", // Optional
      repoUrl: 'https://github.com/yourusername/weather-dashboard',
      year: '2023',
    },
  ];

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
