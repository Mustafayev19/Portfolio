import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Router } from '@angular/router'; // RouterLink importu lazım deyil

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule], // FormsModule və ReactiveFormsModule silindi
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  pageTitle: string = "Let's Connect"; // Başlıq dəyişdirildi
  contactIntro: string =
    "I'm always excited to hear about new opportunities, collaborations, or just to chat. Feel free to reach out through any of the platforms below or send me an email.";

  emailAddress: string = 'your.email@example.com'; // Öz emailinizi yazın

  socialLinks: {
    name: string;
    url: string;
    img: string;
  }[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile', // Öz LinkedIn profilinizin linki
      img: 'icons/linkedin.svg',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername', // Öz GitHub profilinizin linki
      img: 'icons/github.svg',
    },
    // { name: 'Twitter / X', url: 'https://twitter.com/yourusername', iconSvgPath: '...', iconClass: 'text-sky-400' },
    // Digər sosial media linklərinizi də əlavə edə bilərsiniz
  ];

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
