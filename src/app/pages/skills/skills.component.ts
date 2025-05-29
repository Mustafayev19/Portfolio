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
import { Router } from '@angular/router'; // RouterLink removed as it's not used in the template

// Skill interface
interface Skill {
  name: string;
  icon?: string;
  level?: string;
  category?: string;
  description?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // RouterLink removed from here
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  pageTitle: string = 'My Skills & Technical Expertise';

  skillCategories: { name: string; skills: Skill[] }[] = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', icon: 'icons/angular.svg', level: 'Expert' },
        { name: 'TypeScript', icon: 'icons/typescript.svg', level: 'Expert' },
        {
          name: 'JavaScript (ES6+)',
          icon: 'icons/javascript.svg',
          level: 'Expert',
        },
        { name: 'RxJS', icon: 'icons/rxjs.svg', level: 'Advanced' },
        {
          name: 'NgRx',
          icon: 'icons/ngrx.svg',
          level: 'Advanced',
          description: 'State Management',
        },
        { name: 'HTML5', icon: 'icons/html.svg', level: 'Expert' },
        { name: 'CSS3 / SCSS', icon: 'icons/css.svg', level: 'Expert' },
        { name: 'Tailwind CSS', icon: 'icons/tailwind.svg', level: 'Advanced' },
        {
          name: 'Bootstrap',
          icon: 'icons/bootstrap.svg',
          level: 'Intermediate',
        },
        {
          name: 'Responsive Design',
          icon: 'icons/responsive.svg',
          level: 'Expert',
        },
      ],
    },

    {
      name: 'Tools & Other Technologies',
      skills: [
        { name: 'Git & GitHub', icon: 'icons/github.svg', level: 'Expert' },
        { name: 'NPM', icon: 'icons/npm.svg', level: 'Expert' },
        { name: 'REST APIs', icon: 'icons/restfull.svg', level: 'Advanced' },
      ],
    },
  ];

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
