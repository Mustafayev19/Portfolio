import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

// Skill üçün interface
interface Skill {
  name: string;
  icon?: string;
  level?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutComponent {
  name: string = 'Mobil Mustafayev';
  title: string = 'an Angular Developer | Frontend Specialist';

  introduction: string = `Hello! I'm Mobil, a frontend developer who breathes <span class="text-yellow-400 font-semibold">Angular</span>, prioritizes user experience, and is passionate about writing clean, maintainable code. My primary goal is to create meaningful and impactful solutions in the digital world.`;
  philosophy: string = `In an era of rapidly evolving technology, I constantly strive to learn and improve myself. Analytical thinking to solve problems and effective collaboration within a team are crucial for me. My aim is not just to write code, but to deliver products that <span class="text-yellow-400">create value</span>.`;
  skillsTitle: string = 'My Technical Toolkit';

  skills: Skill[] = [
    { name: 'Angular', icon: 'icons/angular.svg' },
    { name: 'JavaScript (ES6+)', icon: 'icons/javascript.svg' },
    { name: 'TypeScript', icon: 'icons/typescript.svg' },
    { name: 'HTML5', icon: 'icons/html.svg' },
    { name: 'CSS3', icon: 'icons/css.svg' },
    { name: 'Tailwind CSS', icon: 'icons/tailwind.svg' },
    { name: 'Bootstrap', icon: 'icons/bootstrap.svg' },
    { name: 'RxJS', icon: 'icons/rxjs.svg' },
    { name: 'NgRx', icon: 'icons/ngrx.svg' },
    { name: 'Git & GitHub', icon: 'icons/github.svg' },
    { name: 'Responsive Design', icon: 'icons/responsive.svg' },
    { name: 'NPM', icon: 'icons/npm.svg' },
  ];

  callToAction = {
    text: 'Layihələrimə nəzər salın və ya mənimlə əlaqə saxlayın!',
    projectLink: '/projects',
    contactLink: '/contact',
  };

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
