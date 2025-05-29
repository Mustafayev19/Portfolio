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

interface WorkExperience {
  jobTitle: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  details?: string;
}

interface Certification {
  name: string;
  issuingOrganization: string;
  date?: string;
  credentialUrl?: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  pageTitle: string = 'My Resume';
  downloadPdfUrl: string = '/assets/pdfs/Mobil_Mustafayev_Resume.pdf'; // PDF faylınızın yolunu yazın

  summary: string =
    'Highly motivated and detail-oriented Angular Developer with X years of experience in building and maintaining responsive web applications. Proficient in TypeScript, JavaScript, HTML, CSS, and modern frontend frameworks. Passionate about creating intuitive user experiences and writing clean, efficient code.';

  workExperience: WorkExperience[] = [
    {
      jobTitle: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Baku, Azerbaijan',
      dates: 'January 2023 - Present',
      responsibilities: [
        'Developed and maintained user interfaces for client projects using Angular, TypeScript, and RxJS.',
        'Collaborated with backend developers to integrate RESTful APIs.',
        'Ensured application responsiveness across various devices and browsers.',
      ],
    },
    {
      jobTitle: 'Junior Frontend Developer',
      company: 'Web Innovators LLC',
      location: 'Baku, Azerbaijan',
      dates: 'June 2021 - December 2022',
      responsibilities: [
        'Assisted in the development of web application features.',
        'Translated UI/UX design wireframes into actual code.',
      ],
    },
  ];

  education: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Baku State University',
      location: 'Baku, Azerbaijan',
      dates: 'September 2017 - June 2021',
      details: "Thesis: 'Advanced Web Application Architectures'",
    },
  ];

  keySkills: string[] = [
    'Angular, TypeScript, JavaScript',
    'HTML5, CSS3, SCSS, Tailwind CSS',
    'RxJS, NgRx',
    'Responsive Design, Git',
  ];

  certifications: Certification[] = [
    {
      name: 'Angular - The Complete Guide',
      issuingOrganization: 'Udemy',
      date: 'Issued May 2022',
    },
  ];

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
