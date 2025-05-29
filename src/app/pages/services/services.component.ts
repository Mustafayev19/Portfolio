import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconSvgPath?: string; // SVG path for an icon
  iconClasses?: string; // For Font Awesome or other icon libraries
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  pageTitle: string = 'Services I Offer';

  services: ServiceItem[] = [
    {
      id: 1,
      title: 'Custom Web Application Development',
      description:
        'Building responsive and scalable web applications tailored to your specific business needs using modern technologies like Angular and TypeScript.',
      iconSvgPath: 'M10 20l4-16m4 4l-4 16M5 12H3m18 0h-2M12 5V3m0 18v-2', // Placeholder Code Icon
      iconClasses: 'text-blue-400',
    },
    {
      id: 2,
      title: 'Frontend UI/UX Development',
      description:
        'Crafting intuitive, user-friendly, and visually appealing user interfaces with a strong focus on user experience and modern design principles.',
      iconSvgPath:
        'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', // Placeholder Palette/Design Icon
      iconClasses: 'text-green-400',
    },
    {
      id: 3,
      title: 'Responsive Web Design',
      description:
        'Ensuring your web applications look and perform perfectly on all devices, including desktops, tablets, and mobile phones.',
      iconSvgPath:
        'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', // Placeholder Devices Icon
      iconClasses: 'text-purple-400',
    },
    {
      id: 4,
      title: 'API Integration',
      description:
        'Seamlessly integrating third-party services and RESTful APIs to extend the functionality of your web applications.',
      iconSvgPath: 'M13 10V3L4 14h7v7l9-11h-7z', // Placeholder API/Plug Icon
      iconClasses: 'text-red-400',
    },
    {
      id: 5,
      title: 'Website Maintenance & Support',
      description:
        'Providing ongoing support, updates, and maintenance to ensure your web applications run smoothly and securely.',
      iconSvgPath:
        'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z', // Placeholder Cog/Settings Icon
      iconClasses: 'text-teal-400',
    },
  ];

  constructor(private router: Router) {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
