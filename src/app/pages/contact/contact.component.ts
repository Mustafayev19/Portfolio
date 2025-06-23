import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClipboardModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // Servisləri inject edirik
  private dataService = inject(DataService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  // Məlumatları servisdən alırıq
  contactData = this.dataService.getContactData();

  private formspreeEndpoint = 'https://formspree.io/f/xeoklnjj';

  submissionStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  emailCopied: boolean = false; // Kopyalama statusu üçün

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  // Validasiya mesajları üçün getter'lər
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Bütün xanaları "toxunulmuş" kimi işarələ
      return;
    }

    this.submissionStatus = 'submitting';
    const formData = this.contactForm.value;

    this.http
      .post(this.formspreeEndpoint, formData, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.submissionStatus = 'success';
          this.contactForm.reset();
        },
        error: () => {
          this.submissionStatus = 'error';
        },
      });
  }

  // Email kopyalandıqda mesaj göstərmək üçün
  onCopyEmail() {
    this.emailCopied = !this.emailCopied;
  }
  goBackToHome() {
    this.router.navigate(['/']);
  }
}
